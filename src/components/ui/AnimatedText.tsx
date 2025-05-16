
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({ text, className, el: Tag = "h1" }: AnimatedTextProps) => {
  return (
    <Tag className={cn("overflow-hidden", className)}>
      <div className="animate-text-flicker">
        {text.split('').map((char, index) => (
          <span 
            key={`char-${index}`}
            className="inline-block hover:text-primary hover:scale-110 transition-all duration-200"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </Tag>
  );
};

export default AnimatedText;
