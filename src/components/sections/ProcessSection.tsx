"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "1. Contacto Inicial",
    desc: "Nos comunicamos contigo para entender tu idea, startup o empresa tecnológica.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "2. Evaluación y Mentoría",
    desc: "Nuestra red de coaches analiza tu proyecto y te guía para perfeccionar el modelo de negocio.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "3. Membresía y Sinergia",
    desc: "Te unes oficialmente a la comunidad Parquesoft y conectas con otros emprendedores y aliados.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "4. Escalamiento e Impacto",
    desc: "Tu proyecto se expande a nivel nacional e internacional apoyado por el Cluster Tecnológico.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <RevealOnScroll>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Únete al <span className="text-gradient">Ecosistema</span>
            </h2>
            <p className="text-xl text-gray-400 mx-auto">
              El proceso para ser parte de la comunidad de Parquesoft Sincelejo y llevar tu proyecto al siguiente nivel.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-neon via-blue-neon to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} md:h-64`}>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass items-center justify-center z-10 glow-effect">
                    <div className="w-3 h-3 rounded-full bg-blue-neon" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 p-6 md:p-12 flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    <RevealOnScroll delay={idx * 0.2} direction={isEven ? "left" : "right"}>
                      <div className="glass p-8 rounded-3xl hover-glow max-w-md w-full relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-neon/10 rounded-full blur-[30px]" />
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-neon to-blue-neon flex items-center justify-center mb-6 shadow-lg">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </RevealOnScroll>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
