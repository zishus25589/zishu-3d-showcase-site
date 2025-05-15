
import { Button } from "@/components/ui/button";
import AnimatedText from "../ui/AnimatedText";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-primary mb-2">Hello, my name is</p>
            <AnimatedText
              text="Zishu"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold">
              I build <span className="gradient-text">exceptional</span> web experiences
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm a programmer and web developer specializing in building
            modern, interactive, and high-performance applications
            that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="#projects">See My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-70">
        <a href="#projects" className="text-primary">
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
