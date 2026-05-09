"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { id: 1, title: "Innovación Visual", subtitle: "Diseño Experiencial", description: "Interfaces 3D inmersivas que cautivan a tus usuarios desde el primer segundo.", color: "#8a2be2", border: "border-purple-500/30" },
  { id: 2, title: "Estrategias Virales", subtitle: "Growth Hacking", description: "Campañas diseñadas algorítmicamente para explotar tu alcance orgánico.", color: "#00d2ff", border: "border-blue-500/30" },
  { id: 3, title: "Desarrollo Premium", subtitle: "Web 3.0 & React", description: "Arquitectura web moderna con Next.js para un rendimiento extremo.", color: "#ff1493", border: "border-pink-500/30" },
  { id: 4, title: "Automatización", subtitle: "IA & Bots", description: "Sistemas inteligentes que operan y venden por ti 24/7 sin descanso.", color: "#ffa500", border: "border-orange-500/30" },
  { id: 5, title: "Conversión", subtitle: "CRO Avanzado", description: "Embudos hiper-optimizados que transforman clics en clientes de alto valor.", color: "#00fa9a", border: "border-emerald-500/30" },
];

export default function MagazineSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress (0 to 1) to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#030014]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-purple-neon/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 mb-8 mt-12 md:mt-24 md:mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Nuestro <span className="text-gradient">Ecosistema</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl font-light leading-relaxed">
            Soluciones interconectadas diseñadas para dominar el mercado digital y escalar tus ventas a niveles astronómicos.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-12 px-6 md:px-32 pb-10">
          {cards.map((card) => {
            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 0.98, rotateY: 5, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`group relative w-[85vw] md:w-[450px] h-[55vh] md:h-[45vh] md:min-h-[450px] md:max-h-[550px] rounded-[2.5rem] overflow-hidden flex-shrink-0 cursor-grab active:cursor-grabbing border ${card.border} bg-white/[0.03] backdrop-blur-2xl`}
                style={{ perspective: 1000 }}
              >
                {/* Inner Glow Effects */}
                <div 
                  className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-40 group-hover:opacity-80 transition-opacity duration-700" 
                  style={{ backgroundColor: card.color }}
                />
                <div 
                  className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-20 group-hover:opacity-60 transition-opacity duration-700" 
                  style={{ backgroundColor: card.color }}
                />

                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] mix-blend-overlay" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="text-white/40 font-mono text-xl">0{card.id}</span>
                      <div className="w-12 h-1 rounded-full bg-white/10 overflow-hidden">
                         <div className="h-full bg-white/60 w-1/3 rounded-full group-hover:w-full transition-all duration-700" />
                      </div>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-black/20 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                      <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: card.color, boxShadow: `0 0 15px ${card.color}` }} />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-1 h-0 bg-white group-hover:h-full transition-all duration-500 ease-out" style={{ backgroundColor: card.color }} />
                    <p className="text-gray-400 font-mono text-xs md:text-sm mb-3 tracking-[0.2em] uppercase font-semibold">{card.subtitle}</p>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-300/80 text-sm md:text-base font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
