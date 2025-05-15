
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col items-center space-y-2 text-center mb-10", className)}>
      <h2 className="text-3xl font-bold gradient-text tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary rounded-full mt-2" />
    </div>
  );
};

export default SectionHeading;
