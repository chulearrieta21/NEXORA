"use client";

import { Smartphone, Target, Sparkles, Code2, Bot, Video } from "lucide-react";
import RevealOnScroll from "../animations/RevealOnScroll";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-purple-neon" />,
    title: "Desarrollo de Software y Apps",
    description: "Creamos soluciones a la medida, vanguardistas y de alta calidad para resolver retos complejos.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-neon" />,
    title: "Cluster Tecnológico",
    description: "Sinergia entre empresas de base tecnológica para generar una oferta de valor integral.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Innovación y Emprendimiento",
    description: "Apoyo continuo a nuevas iniciativas tecnológicas en un ecosistema de crecimiento acelerado.",
  },
  {
    icon: <Bot className="w-8 h-8 text-green-400" />,
    title: "Red de Mentores y Coaches",
    description: "Acompañamiento del más alto nivel con expertos para escalar tu modelo de negocio.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: "Comunidad Activa",
    description: "Conexión constante entre emprendedores, inversores y talento en Sincelejo y Colombia.",
  },
  {
    icon: <Video className="w-8 h-8 text-orange-400" />,
    title: "Fábricas de Productividad",
    description: "Programas de optimización y vouchers de conocimiento para acelerar la transformación digital.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-neon/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Nuestra <span className="text-gradient">Propuesta</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Parquesoft es un ecosistema multi-sectorial de servicios TI, impulsando empresas de base tecnológica que trabajan juntas para generar impacto real.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="group glass p-8 rounded-3xl hover-glow h-full flex flex-col relative overflow-hidden transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
