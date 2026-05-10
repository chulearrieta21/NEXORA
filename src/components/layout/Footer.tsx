import { Share2, Globe, MessageCircle, ArrowUpRight, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="bg-white/95 inline-flex items-center gap-3 p-3 rounded-2xl shadow-[0_0_20px_rgba(0,168,89,0.2)]">
                <img src="/parquesoft-logo-clean.png" alt="ParqueSoft" className="h-10 w-auto object-contain" />
                <span className="text-gray-500 text-[0.8rem] font-black tracking-[0.2em] uppercase leading-none border-l-2 border-gray-300 pl-3">
                  Sincelejo
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Parquesoft es el cluster de ciencia y tecnología informática más grande de Colombia. Innovación, Pasión y Sinergia.
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
              <li><a href="#" className="hover:text-purple-neon transition-colors">Cluster Tecnológico</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Desarrollo de Software</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Red de Coaches</a></li>
              <li><a href="#" className="hover:text-purple-neon transition-colors">Comunidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="mailto:contacto@parquesoftsincelejo.com" className="hover:text-white transition-colors flex items-center gap-2">contacto@parquesoftsincelejo.com <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Únete a la Comunidad <ArrowUpRight size={14} /></a></li>
              <li className="pt-2">Sincelejo, Sucre</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Parquesoft Sincelejo. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
