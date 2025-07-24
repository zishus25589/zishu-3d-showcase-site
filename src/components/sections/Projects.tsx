
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Real-Time Chat Application",
    description: "PubNub-powered chat application with real-time messaging, presence, and user management.",
    technologies: ["React", "PubNub", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubUrl: "#",
    liveUrl: "/chat",
  },
  {
    title: "AI Content Generator",
    description: "ML-powered tool for generating blog posts, social media content, and marketing copy.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="Here are some of my recent projects that showcase my skills and experience."
        />
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        {projectsData.length > 3 && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
