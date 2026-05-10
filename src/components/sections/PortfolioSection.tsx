"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    client: "SucreInnova",
    metric: "+50",
    metricLabel: "Empresarios Viabilizados",
    tag: "Proyecto de Inversión",
    imageGrad: "from-purple-900/40 to-black",
  },
  {
    id: 2,
    client: "Fábricas de Productividad",
    metric: "100%",
    metricLabel: "Acompañamiento",
    tag: "Programa",
    imageGrad: "from-blue-900/40 to-black",
  },
  {
    id: 3,
    client: "Váucher de Conocimiento",
    metric: "Top",
    metricLabel: "Resultados en Entorno",
    tag: "Innovación",
    imageGrad: "from-emerald-900/40 to-black",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Nuestros <span className="text-gradient">Proyectos</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-xl">
                Los resultados de nuestro impacto en la región. Trabajamos con aliados para fortalecer el tejido empresarial.
              </p>
            </div>
            <button className="flex items-center gap-2 text-white font-semibold hover:text-blue-neon transition-colors pb-2 border-b border-white/20 hover:border-blue-neon">
              Ver todos los proyectos <ArrowUpRight size={20} />
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 0.2}>
              <div className="group relative rounded-3xl overflow-hidden glass hover-glow cursor-pointer aspect-[4/5] flex flex-col justify-end p-8">
                {/* Background Simulation */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.imageGrad} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                
                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-6 text-white border border-white/10">
                    {project.tag}
                  </div>
                  
                  <h3 className="text-3xl font-heading font-bold text-white mb-2">
                    {project.client}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-neon to-purple-neon">
                      {project.metric}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{project.metricLabel}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
