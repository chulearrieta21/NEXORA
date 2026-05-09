"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base continuous rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Scroll-driven effects
      const scrollY = window.scrollY;
      const targetZ = Math.min(scrollY * 0.015, 5); // move towards camera as you scroll
      const targetRotZ = scrollY * 0.005; // twist as you scroll
      
      meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotZ, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* TorusKnot Geometry for a premium abstract look */}
        <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
        
        {/* Glass-like premium material */}
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={1}
          anisotropy={0.3}
          color="#8a2be2" // Purple neon tint
        />
      </mesh>
    </Float>
  );
}
