
import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress for theme
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    // Once progress reaches 100, set loading to false after a delay
    const completeTimer = setTimeout(() => {
      if (progress >= 100) {
        setLoading(false);
      }
    }, 1600);
    
    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [progress]);

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <div className="text-center max-w-sm w-full px-8">
            <h1 className="text-3xl font-bold gradient-text mb-6 font-gaming animate-text-flicker">Zishu.dev</h1>
            <div className="relative w-full h-4 bg-muted rounded-full overflow-hidden pixel-border">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse" 
                style={{width: `${progress}%`}}
              >
                <div className="absolute top-0 right-0 h-full w-1 bg-white/30 animate-pulse"></div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground font-gaming text-xs tracking-widest">
              {progress < 40 && "INITIALIZING..."}
              {progress >= 40 && progress < 70 && "LOADING ASSETS..."}
              {progress >= 70 && progress < 90 && "PREPARING UI..."}
              {progress >= 90 && "READY TO LAUNCH"}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-2">
              {[1,2,3].map((i) => (
                <div 
                  key={i} 
                  className="w-full h-1 bg-primary/20 rounded overflow-hidden"
                  style={{
                    animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
                  }}
                >
                  <div className="h-full bg-primary w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-background z-[-1] overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl top-1/3 -left-40 animate-float"></div>
              <div className="absolute h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl top-2/3 right-0 animate-float animation-delay-1000"></div>
              <div className="absolute h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl bottom-0 left-1/3 animate-float animation-delay-2000"></div>
            </div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            {/* Moving particles */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-primary rounded-full w-1 h-1"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.3,
                    animation: `float ${Math.random() * 10 + 10}s linear ${Math.random() * 5}s infinite`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Border glow effects */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-secondary"></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50"></div>
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
