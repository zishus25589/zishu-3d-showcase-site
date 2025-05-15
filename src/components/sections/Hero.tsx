
import { Button } from "@/components/ui/button";
import AnimatedText from "../ui/AnimatedText";
import GamingImage from "../ui/GamingImage";
import { Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="mb-6 text-left">
            <p className="text-primary mb-2 font-gaming text-xs tracking-widest">READY PLAYER ONE</p>
            <AnimatedText
              text="Zishu"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glow-text"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">
              I build <span className="gradient-text">exceptional</span> experiences
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Programmer and web developer specializing in building
            modern, interactive, and high-performance applications
            that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gaming" size="lg" className="px-8 group" asChild>
              <a href="#projects">
                <span>See My Work</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 group" asChild>
              <a href="#contact">
                <Gamepad2 className="mr-2 h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 px-4 lg:px-10">
          <GamingImage 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Programmer" 
            className="w-full max-w-md mx-auto lg:max-w-lg"
          />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70">
        <a href="#projects" className="text-primary hover:text-accent transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
