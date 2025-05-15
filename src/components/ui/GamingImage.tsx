
import { useState } from 'react';

interface GamingImageProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}

const GamingImage = ({ src, alt, className, label = "DEVELOPER" }: GamingImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pixel-border rounded-md overflow-hidden relative">
        <div className="overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'}`}></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className={`absolute top-0 left-0 w-full h-1 bg-primary/50 transform ${isHovered ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700 delay-100`}></div>
          <div className={`absolute bottom-0 right-0 w-full h-1 bg-primary/50 transform ${isHovered ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-700 delay-100`}></div>
          <div className={`absolute top-0 right-0 h-full w-1 bg-primary/50 transform ${isHovered ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-700 delay-300`}></div>
          <div className={`absolute top-0 left-0 h-full w-1 bg-primary/50 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 delay-300`}></div>
        </div>
      </div>
      
      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background px-4 py-1 border-2 border-primary rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-70'}`}>
        <span className="text-xs font-gaming text-primary animate-glow">{label}</span>
      </div>
      
      <div className={`absolute -top-5 -right-5 w-10 h-10 transition-all duration-300 ${isHovered ? 'opacity-100 rotate-12' : 'opacity-0 rotate-0'}`}>
        <div className="w-full h-full relative">
          <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></span>
          <span className="absolute inset-2 bg-primary rounded-full opacity-50"></span>
        </div>
      </div>
    </div>
  );
};

export default GamingImage;
