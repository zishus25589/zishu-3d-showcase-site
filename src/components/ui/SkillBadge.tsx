
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ReactNode } from "react";

interface SkillBadgeProps {
  name: string;
  className?: string;
  level?: number;
  icon?: ReactNode;
}

const SkillBadge = ({ name, className, level, icon }: SkillBadgeProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge
          className={cn(
            "px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-110 group hover:shadow-[0_0_15px_rgba(59,195,243,0.5)]",
            level && level > 85 ? "bg-primary/30" : level && level > 75 ? "bg-primary/20" : "bg-muted",
            className
          )}
        >
          {icon && <span className="mr-2 transform group-hover:rotate-12 transition-transform">{icon}</span>}
          {name}
          {level && (
            <span className="ml-2 opacity-70">{level}%</span>
          )}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-2 backdrop-blur-md bg-black/70 border-primary/30 shadow-[0_0_15px_rgba(59,195,243,0.3)] animate-fade-in">
        <div className="flex space-x-2 items-center">
          {icon}
          <div>
            <p className="font-medium text-primary">{name}</p>
            <div className="w-full bg-muted/30 h-1.5 rounded-full mt-1">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SkillBadge;
