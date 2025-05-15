
import { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Canvas from "@/components/Canvas";

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for 3D elements
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
            <h1 className="text-3xl font-bold gradient-text mb-4">Zishu.dev</h1>
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading experience...</p>
          </div>
        </div>
      ) : (
        <>
          <Suspense fallback={null}>
            <Canvas />
          </Suspense>
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
