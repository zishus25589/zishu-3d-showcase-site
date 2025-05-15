
import { useState } from 'react';

interface GamingImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GamingImage = ({ src, alt, className }: GamingImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pixel-border rounded-md overflow-hidden">
        <div className="overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
          />
        </div>
      </div>
      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background px-4 py-1 border-2 border-primary rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
        <span className="text-xs font-gaming text-primary animate-glow">DEVELOPER</span>
      </div>
    </div>
  );
};

export default GamingImage;
