
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    {
      title: "Home",
      href: "#home"
    }, 
    {
      title: "Projects",
      href: "#projects"
    }, 
    {
      title: "About",
      href: "#about"
    }, 
    {
      title: "Contact",
      href: "#contact"
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold relative group magnetic-hover">
          <span className="text-white glitch-text" data-text="Zishu">Zishu</span>
          <span className="text-primary">
            <span className="liquid-text">.dev</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <a 
              key={link.title}
              href={link.href} 
              className="px-4 py-2 text-foreground/70 hover:text-primary transition-all duration-300 relative overflow-hidden magnetic-hover click-ripple"
            >
              <span className="relative z-10">{link.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button asChild className="click-ripple">
            <a href="#contact" className="text-reveal">Let's Talk</a>
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden click-ripple" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none' }}>
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </Button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.title} 
                href={link.href} 
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 click-ripple" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button 
              className="w-full click-ripple" 
              onClick={() => setMobileMenuOpen(false)} 
              asChild
            >
              <a href="#contact" className="text-reveal">Let's Talk</a>
            </Button>
          </div>
        </div>
      )}

      <div className="fps-indicator"></div>
    </header>
  );
};

export default Navbar;
