"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-16 border-4 border-t-purple-neon border-r-blue-neon border-b-transparent border-l-transparent rounded-full animate-spin glow-effect"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <div className="bg-white/95 inline-flex items-center gap-4 p-4 rounded-3xl shadow-[0_0_40px_rgba(0,168,89,0.4)]">
                <img src="/parquesoft-logo-clean.png" alt="ParqueSoft" className="h-12 w-auto object-contain" />
                <span className="text-gray-500 text-[0.9rem] font-black tracking-[0.3em] uppercase leading-none border-l-2 border-gray-300 pl-4">
                  Sincelejo
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
