
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
  level?: number;
}

const SkillBadge = ({ name, className, level }: SkillBadgeProps) => {
  return (
    <Badge
      className={cn(
        "px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300",
        level && level > 80 ? "bg-primary/20" : "bg-muted",
        className
      )}
    >
      {name}
      {level && (
        <span className="ml-2 opacity-70">{level}%</span>
      )}
    </Badge>
  );
};

export default SkillBadge;
