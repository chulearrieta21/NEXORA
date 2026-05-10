"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "CEO, TechSucre Solutions",
    content: "Gracias a la red de mentores de Parquesoft pudimos estructurar nuestro modelo de negocio y conseguir nuestra primera ronda de inversión ángel. El ecosistema es invaluable.",
    rating: 5,
  },
  {
    name: "Laura Gómez",
    role: "Fundadora, AgroInnova",
    content: "El programa de Fábricas de Productividad nos permitió optimizar nuestros procesos internos mediante tecnología que desarrollamos junto al Cluster Tecnológico.",
    rating: 5,
  },
  {
    name: "Andrés Silva",
    role: "Director, EduTech Caribe",
    content: "Pertenecer a la comunidad nos abrió las puertas a alianzas estratégicas que no hubiéramos logrado solos. La sinergia y el apoyo constante son increíbles.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-blue-neon/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Lo que dicen los <span className="text-gradient">Líderes</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.2} direction="up">
              <div className="glass p-8 rounded-3xl relative h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg mb-8 flex-grow leading-relaxed italic">
                  "{test.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-neon to-blue-neon p-[2px]">
                    <div className="w-full h-full rounded-full bg-dark flex items-center justify-center font-bold text-white">
                      {test.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{test.name}</h4>
                    <p className="text-gray-500 text-sm">{test.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
