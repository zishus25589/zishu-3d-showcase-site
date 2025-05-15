
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticlesBackground = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const count = 2000;
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    if (ref.current) {
      ref.current.rotation.x = Math.cos(time / 4) * 0.3;
      ref.current.rotation.y = Math.sin(time / 4) * 0.3;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial 
        transparent
        color="#8b5cf6" 
        size={0.02} 
        sizeAttenuation={true} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticlesBackground;
