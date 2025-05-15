
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Zishu<span className="text-primary">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Building exceptional web experiences
            </p>
          </div>
          
          <div className="flex space-x-4">
            {["GitHub", "Twitter", "LinkedIn"].map((item) => (
              <Button key={item} variant="ghost" size="sm" className="text-muted-foreground">
                {item}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-muted text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Zishu. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with ❤️ using React, Three.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
