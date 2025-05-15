
import { Suspense, useEffect, useState } from "react";
import Scene3D from "./canvas/Scene3D";

const Canvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={<div className="canvas-container bg-background" />}>
      <Scene3D />
    </Suspense>
  );
};

export default Canvas;
