"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const FlipperLink = ({ children, href }: { children: string; href: string }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-sm font-medium text-gray-300 hover:text-white transition-colors"
      style={{ lineHeight: 1.2 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{ initial: { y: 0 }, hover: { y: "-100%" } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{ initial: { y: "100%" }, hover: { y: 0 } }}
            transition={{ duration: DURATION, ease: "easeInOut", delay: STAGGER * i }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold text-white tracking-widest cursor-pointer">
          NEX<span className="text-purple-neon">ORA</span>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <FlipperLink href="#services">Servicios</FlipperLink>
          <FlipperLink href="#portfolio">Portafolio</FlipperLink>
          <FlipperLink href="#process">Proceso</FlipperLink>
          <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full font-semibold hover-glow text-sm">
            Agendar Llamada
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col p-6 space-y-4 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#services" className="text-gray-300 text-lg" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#portfolio" className="text-gray-300 text-lg" onClick={() => setMobileMenuOpen(false)}>Portafolio</a>
          <a href="#process" className="text-gray-300 text-lg" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
          <a href="#contact" className="text-blue-neon text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Agendar Llamada</a>
        </motion.div>
      )}
    </motion.header>
  );
}
