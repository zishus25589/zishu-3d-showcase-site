
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({ text, className, el: Tag = "h1" }: AnimatedTextProps) => {
  return (
    <Tag className={cn("overflow-hidden", className)}>
      <div className="animate-fade-in">
        {text}
      </div>
    </Tag>
  );
};

export default AnimatedText;
