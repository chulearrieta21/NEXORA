"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

export default function Particles() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation based on time for dynamic feel
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background stars for depth */}
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={1} />
      
      {/* Floating particles (dust/sparkles effect) around the main object */}
      <Sparkles 
        count={100} 
        scale={12} 
        size={2} 
        speed={0.4} 
        opacity={0.5} 
        color="#00d2ff" // Blue neon
      />
      <Sparkles 
        count={50} 
        scale={15} 
        size={4} 
        speed={0.2} 
        opacity={0.3} 
        color="#8a2be2" // Purple neon
      />
    </group>
  );
}
