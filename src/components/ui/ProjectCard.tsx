
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 pixel-border border-primary/60 bg-card/80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-primary/20 text-primary border-primary/20 font-gaming text-xs">
              <Trophy className="w-3 h-3 mr-1" /> Achievement
            </Badge>
          </div>
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-gaming">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-1">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-muted-foreground">
          {description}
        </CardDescription>
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-1 group" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button variant="gaming" size="sm" className="gap-1 group" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
