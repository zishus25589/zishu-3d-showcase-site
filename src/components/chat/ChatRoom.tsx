import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Users } from 'lucide-react';
import PubNub from 'pubnub';
import pubnubLogo from '@/assets/pubnub-logo.png';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
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
          timestamp: Date.now()
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

    // Subscribe to channel
    pubnub.subscribe({
      channels: [CHANNEL],
      withPresence: true
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
      pubnubRef.current.publish({
        channel: CHANNEL,
        message: {
          text: newMessage.trim(),
          sender: username
        }
      });
      setNewMessage('');
    }
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
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 h-[calc(100vh-2rem)]">
        {/* Chat Area */}
        <Card className="lg:col-span-3 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <img 
                src={pubnubLogo} 
                alt="PubNub" 
                className="w-12 h-6 object-contain"
              />
              <h2 className="text-xl font-semibold glow-text">Real-Time Chat</h2>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-muted-foreground">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === username ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === username 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <div className="text-sm font-medium">{message.sender}</div>
                    <div>{message.text}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Users Panel */}
        <Card className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5" />
            <h3 className="font-semibold">Online Users</h3>
            <Badge variant="secondary">{users.length}</Badge>
          </div>
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user.uuid}
                className={`p-2 rounded-lg ${
                  user.uuid === username ? 'bg-primary/20' : 'bg-muted'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">{user.uuid}</span>
                  {user.uuid === username && (
                    <span className="text-xs text-muted-foreground">(You)</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatRoom;