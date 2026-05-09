"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";
import FloatingObject from "./FloatingObject";
import Particles from "./Particles";

export default function Scene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {/* Canvas for 3D rendering. Pointer events auto allows interaction with 3D objects if needed, 
          but we set wrapper to none so it doesn't block UI buttons. 
          PresentationControls will still catch events if we enable pointer-events on Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ pointerEvents: "auto" }} // Allow dragging the 3D object
        dpr={[1, 2]} // High DPI support
        gl={{ powerPreference: "high-performance", antialias: false, preserveDrawingBuffer: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d2ff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#8a2be2" />
        
        {/* Environment for reflections on the glass material */}
        <Environment preset="city" />

        {/* Particles / Dust */}
        <Particles />

        {/* Interactive wrapper for mouse movement parallax */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <FloatingObject />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
