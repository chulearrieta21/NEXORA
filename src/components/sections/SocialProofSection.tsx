"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import { motion } from "framer-motion";

const metrics = [
  { value: "+12M", label: "Alcance Generado" },
  { value: "+350", label: "Campañas Exitosas" },
  { value: "+98%", label: "Satisfacción" },
  { value: "+5", label: "Años Experiencia" },
];

const logos = ["VOGUE", "FORBES", "NIKE", "APPLE", "TESLA", "TIKTOK"];

export default function SocialProofSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <p className="text-center text-gray-500 text-sm font-semibold tracking-widest uppercase mb-12">
            CONFIAN MARCAS LÍDERES A NIVEL GLOBAL
          </p>
        </RevealOnScroll>

        {/* Logos Marquee */}
        <div className="flex overflow-hidden relative w-full mb-24 mask-image-linear-gradient">
          <motion.div 
            className="flex whitespace-nowrap gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {/* Double the logos for infinite scroll effect */}
            {[...logos, ...logos].map((logo, index) => (
              <span key={index} className="text-3xl md:text-4xl font-heading font-black text-gray-800 tracking-tighter">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.1}>
              <div className="flex flex-col items-center justify-center p-6 glass rounded-2xl hover-glow">
                <span className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                  {metric.value}
                </span>
                <span className="text-sm text-blue-neon font-medium text-center uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mask-image-linear-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
