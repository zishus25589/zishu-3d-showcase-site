
import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for theme
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold gradient-text mb-4 font-gaming">Zishu.dev</h1>
            <div className="relative w-64 h-4 bg-muted rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary animate-pulse" style={{width: '75%'}}></div>
            </div>
            <p className="mt-4 text-muted-foreground font-gaming text-xs">LOADING EXPERIENCE...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-background z-[-1] overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl top-1/3 -left-40"></div>
              <div className="absolute h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl top-2/3 right-0"></div>
              <div className="absolute h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl bottom-0 left-1/3"></div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary"></div>
          </div>
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
