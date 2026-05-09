"use client";

import { Smartphone, Target, Sparkles, Code2, Bot, Video } from "lucide-react";
import RevealOnScroll from "../animations/RevealOnScroll";

const services = [
  {
    icon: <Smartphone className="w-8 h-8 text-purple-neon" />,
    title: "TikTok Ads",
    description: "Creatividades virales y segmentación algorítmica para escalar tu ROAS a niveles absurdos.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-neon" />,
    title: "Meta Ads",
    description: "Sistemas de adquisición de clientes ultra-optimizados y basados en machine learning.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
    title: "Branding",
    description: "Identidad visual premium que posiciona a tu marca como la única opción en tu mercado.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-green-400" />,
    title: "Diseño Web",
    description: "Landing pages y e-commerces futuristas diseñados estrictamente para maximizar conversiones.",
  },
  {
    icon: <Bot className="w-8 h-8 text-pink-500" />,
    title: "Automatización IA",
    description: "Implementación de agentes de IA para atención al cliente y optimización de embudos 24/7.",
  },
  {
    icon: <Video className="w-8 h-8 text-orange-400" />,
    title: "Producción UGC",
    description: "Contenido orgánico estilo reel/tiktok generado por creadores para conectar con tu audiencia.",
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
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              No hacemos marketing tradicional. Construimos ecosistemas digitales diseñados para dominar la atención y multiplicar ingresos.
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
