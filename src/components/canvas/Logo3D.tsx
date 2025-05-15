
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Float } from "@react-three/drei";
import * as THREE from "three";

const Logo3D = () => {
  const textRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (textRef.current) {
      textRef.current.material.color.setHSL(0.6, 0.8, 0.5 + Math.sin(time) * 0.2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.4}>
      <Text3D
        ref={textRef}
        font="/fonts/Inter_Bold.json"
        size={1.2}
        height={0.15}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-3.5, 0, 0]}
      >
        Zishu.dev
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
        />
      </Text3D>
    </Float>
  );
};

export default Logo3D;
