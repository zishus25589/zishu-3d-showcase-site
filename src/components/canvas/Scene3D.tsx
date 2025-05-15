
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import ParticlesBackground from "./ParticlesBackground";
import Logo3D from "./Logo3D";

const Scene3D = () => {
  return (
    <>
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ParticlesBackground />
            <Logo3D />
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2 - 0.5}
              maxPolarAngle={Math.PI / 2 + 0.5}
              rotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>
      <Loader />
    </>
  );
};

export default Scene3D;
