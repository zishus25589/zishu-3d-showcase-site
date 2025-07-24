import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Users, Eye, EyeOff, MessageCircle } from 'lucide-react';
import PubNub from 'pubnub';
import pubnubLogo from '@/assets/pubnub-logo.png';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
  isPrivate?: boolean;
  recipient?: string;
}

interface User {
  uuid: string;
  state?: any;
}

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pubnubRef = useRef<PubNub | null>(null);

  const CHANNEL = 'chat-demo';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializePubNub = (userId: string) => {
    const pubnub = new PubNub({
      publishKey: 'demo', // Using demo keys for this example
      subscribeKey: 'demo',
      uuid: userId,
      heartbeatInterval: 0
    });

    pubnubRef.current = pubnub;

    // Add message listener
    pubnub.addListener({
      message: (messageEvent: any) => {
        const message: Message = {
          id: Date.now().toString(),
          text: messageEvent.message.text,
          sender: messageEvent.publisher,
          timestamp: Date.now(),
          isPrivate: messageEvent.message.isPrivate || false,
          recipient: messageEvent.message.recipient
        };
        setMessages(prev => [...prev, message]);
      },
      presence: (presenceEvent) => {
        if (presenceEvent.action === 'join') {
          setUsers(prev => [...prev.filter(u => u.uuid !== presenceEvent.uuid), { uuid: presenceEvent.uuid }]);
        } else if (presenceEvent.action === 'leave') {
          setUsers(prev => prev.filter(u => u.uuid !== presenceEvent.uuid));
        }
      },
      status: (statusEvent) => {
        if (statusEvent.category === 'PNConnectedCategory') {
          setIsConnected(true);
        }
      }
    });

    // Subscribe to main channel and potential private channels
    pubnub.subscribe({
      channels: [CHANNEL],
      withPresence: true
    });

    // Subscribe to private channels for this user
    const privateChannelPattern = `private-*${userId}*`;
    pubnub.subscribe({
      channels: [privateChannelPattern],
      withPresence: false
    });

    // Get initial presence
    pubnub.hereNow({
      channels: [CHANNEL]
    }).then((response) => {
      const occupants = response.channels[CHANNEL]?.occupants || [];
      setUsers(occupants);
    });
  };

  const joinChat = () => {
    if (username.trim()) {
      initializePubNub(username);
      setIsJoined(true);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() && pubnubRef.current) {
      const isPrivateMessage = selectedUser && selectedUser !== username;
      const channel = isPrivateMessage ? `private-${[username, selectedUser].sort().join('-')}` : CHANNEL;
      
      pubnubRef.current.publish({
        channel: channel,
        message: {
          text: newMessage.trim(),
          sender: username,
          isPrivate: isPrivateMessage,
          recipient: selectedUser
        }
      });
      setNewMessage('');
      setIsTyping(false);
    }
  };

  const sendPrivateMessage = (recipient: string) => {
    setSelectedUser(recipient);
    setShowUsers(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!isJoined) {
        joinChat();
      } else {
        sendMessage();
      }
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp / 10000).toLocaleTimeString();
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-6">
          <div className="space-y-4">
            <img 
              src={pubnubLogo} 
              alt="PubNub Logo" 
              className="w-32 h-16 mx-auto object-contain"
            />
            <h1 className="text-3xl font-bold glow-text">Real-Time Chat</h1>
            <p className="text-muted-foreground">
              Powered by PubNub - Enter your username to join the conversation
            </p>
          </div>
          
          <div className="space-y-4">
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-center"
            />
            <Button 
              onClick={joinChat}
              disabled={!username.trim()}
              className="w-full"
            >
              Join Chat
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 relative">
      <div className="max-w-4xl mx-auto h-[calc(100vh-2rem)]">
        {/* Chat Area */}
        <Card className="h-full flex flex-col backdrop-blur-sm bg-card/50 border border-border/50 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-background/80 to-background/60">
            <div className="flex items-center space-x-3">
              <img 
                src={pubnubLogo} 
                alt="PubNub" 
                className="w-12 h-6 object-contain animate-pulse"
              />
              <div>
                <h2 className="text-xl font-semibold glow-text bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Real-Time Chat
                </h2>
                {selectedUser && (
                  <p className="text-sm text-muted-foreground animate-fade-in">
                    Private chat with {selectedUser}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUsers(!showUsers)}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {showUsers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span className="ml-2 hidden sm:inline">
                  {showUsers ? 'Hide' : 'Show'} Users ({users.length})
                </span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm text-muted-foreground">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === username ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    message.sender === username 
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-primary/20' 
                      : message.isPrivate 
                      ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30' 
                      : 'bg-muted/80 backdrop-blur-sm'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">{message.sender}</div>
                      {message.isPrivate && (
                        <MessageCircle className="w-3 h-3 text-purple-400" />
                      )}
                    </div>
                    <div className="break-words">{message.text}</div>
                    <div className="text-xs opacity-70 mt-2">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-pulse">
                  <div className="bg-muted/60 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-border/50 bg-gradient-to-r from-background/80 to-background/60">
            {selectedUser && (
              <div className="flex items-center justify-between mb-2 p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <span className="text-sm text-purple-400">Private message to {selectedUser}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedUser(null)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  ✕
                </Button>
              </div>
            )}
            <div className="flex space-x-2">
              <Input
                placeholder={selectedUser ? `Private message to ${selectedUser}...` : "Type your message..."}
                value={newMessage}
                onChange={(e) => {
                  setNewMessage(e.target.value);
                  setIsTyping(e.target.value.length > 0);
                }}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-all duration-300"
              />
              <Button 
                onClick={sendMessage} 
                disabled={!newMessage.trim()}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Hidden Users Panel */}
        {showUsers && (
          <Card className="absolute right-4 top-20 w-64 p-4 backdrop-blur-sm bg-card/90 border border-border/50 shadow-2xl animate-slide-in-right z-10">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Online Users</h3>
              <Badge variant="secondary" className="animate-pulse">{users.length}</Badge>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {users.map((user) => (
                <div
                  key={user.uuid}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                    user.uuid === username 
                      ? 'bg-primary/20 border border-primary/30' 
                      : 'bg-muted/60 hover:bg-muted/80'
                  }`}
                  onClick={() => user.uuid !== username && sendPrivateMessage(user.uuid)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">{user.uuid}</span>
                    </div>
                    {user.uuid === username ? (
                      <span className="text-xs text-muted-foreground">(You)</span>
                    ) : (
                      <MessageCircle className="w-3 h-3 text-primary opacity-60" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ChatRoom;