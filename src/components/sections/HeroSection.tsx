"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";
import RevealOnScroll from "../animations/RevealOnScroll";

const Scene = dynamic(() => import("../3d/Scene"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-neon/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-neon/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

      {/* 3D Scene */}
      <Scene />

      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
        <RevealOnScroll delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-gray-300">
            <span className="w-2 h-2 rounded-full bg-blue-neon animate-pulse" />
            El Cluster Tecnológico de Sucre
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl">
            Transformamos la realidad <br className="hidden md:block" />
            <span className="text-gradient">mediante la innovación.</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg font-medium">
            Únete a la comunidad de emprendimiento tecnológico más grande. Desarrollamos software, apps y promovemos la sinergia empresarial en Sincelejo.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto">
            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full text-lg overflow-hidden hover-glow">
              <span className="relative z-10 flex items-center gap-2">
                Únete a la Comunidad <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 glass text-white font-bold rounded-full text-lg flex items-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-xl">
              <Play size={20} className="text-purple-neon" /> Conoce los proyectos
            </button>
          </div>
        </RevealOnScroll>

        {/* Scroll Indicator */}
        <RevealOnScroll delay={1.2}>
          <motion.div 
            className="mt-20 mx-auto w-px h-24 bg-gradient-to-b from-purple-neon to-transparent"
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

