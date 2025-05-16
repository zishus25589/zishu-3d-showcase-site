
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold relative group magnetic-hover">
              <span className="text-white glitch-text" data-text="Zishu">Zishu</span>
              <span className="text-primary">
                <span className="liquid-text">.dev</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </a>
            <p className="text-sm text-muted-foreground mt-1 animate-pulse">
              Building exceptional web experiences
            </p>
          </div>
          
          <div className="flex space-x-4">
            {["GitHub", "Twitter", "LinkedIn"].map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 magnetic-hover click-ripple"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-muted text-center text-sm text-muted-foreground">
          <p className="text-reveal">&copy; {currentYear} Zishu. All rights reserved.</p>
          <p className="mt-2 animate-pulse">
            Designed and built with
            <span className="inline-block mx-1 text-red-500 animate-pulse" style={{ animationDelay: '0.5s' }}>❤️</span>
            using React, Three.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
