"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-purple-900/20 to-[#050505] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-neon/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 max-w-4xl mx-auto leading-tight">
            Tu competencia ya está invirtiendo en marketing.
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <p className="text-2xl text-gray-300 mb-12 font-medium">
            ¿Vas a dejar que se queden con tus clientes?
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.4}>
          <button className="group relative px-10 py-5 bg-white text-black font-extrabold rounded-full text-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-neon via-purple-neon to-blue-neon opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Trabajemos juntos <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
