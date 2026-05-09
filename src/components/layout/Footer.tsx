import { Share2, Globe, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">
              NEX<span className="text-purple-neon">ORA</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Escalamos marcas a través de estrategias digitales virales, creatividad premium y publicidad hiper-optimizada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-blue-neon transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-blue-neon transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-blue-neon transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Servicios</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-neon transition-colors">TikTok Ads</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Meta Ads</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Branding Premium</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="mailto:hello@nexora.com" className="hover:text-white transition-colors flex items-center gap-2">hello@nexora.com <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Agendar Llamada <ArrowUpRight size={14} /></a></li>
              <li className="pt-2">Silicon Valley, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Nexora Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
