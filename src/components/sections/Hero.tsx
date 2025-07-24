
import { Button } from "@/components/ui/button";
// import AnimatedText from "../ui/AnimatedText";
import GamingImage from "../ui/GamingImage";
import { Gamepad2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="mb-6 text-left">
            <p className="text-primary mb-2 font-gaming text-xs tracking-widest animate-pulse">READY PLAYER ONE</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glow-text">
              Zishu
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">
              I build <span className="gradient-text animate-text-flicker">exceptional</span> experiences
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 relative">
            <span className="absolute -left-4 top-0 text-primary animate-ping opacity-70">
              <Sparkles size={16} />
            </span>
            Programmer and web developer specializing in building
            modern, interactive, and high-performance applications
            that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gaming" size="lg" className="px-8 group animate-click-pulse relative overflow-hidden" asChild>
              <a href="#projects">
                <span className="relative z-10">See My Work</span>
                <span className="inline-block transition-transform group-hover:translate-x-1 relative z-10">→</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 group animate-click-pulse relative overflow-hidden" asChild>
              <a href="#contact">
                <Gamepad2 className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 px-4 lg:px-10 relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/10 rounded-full filter blur-2xl animate-pulse animation-delay-2000"></div>
          <GamingImage 
            src="/lovable-uploads/8ed534af-8de7-4eab-8a84-c6ece5059126.png" 
            alt="Developer at computer" 
            className="w-full max-w-md mx-auto lg:max-w-lg"
            label="DEVELOPER"
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
      
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-accent rounded-full animate-ping animation-delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-secondary rounded-full animate-ping animation-delay-1500"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping animation-delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
