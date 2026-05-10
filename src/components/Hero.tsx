"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic interactive background gradient */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium border border-blue-500/30 text-blue-400"
        >
          <Terminal size={16} />
          <span>Full Stack Developer</span>
        </motion.div>
 
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-foreground">Gaurav Shukla</span>
          <span className="block mt-2 text-gradient">Crafting dynamic</span>
          <span className="block mt-2 text-gradient">web experiences.</span>
        </motion.h1>
 
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted max-w-3xl mb-12"
        >
          Expertise in JavaScript, React, Redux, and Next.js. Passionate about building scalable, high-performance web applications with pixel-perfect frontend precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 dark:hover:bg-white/5 rounded-full font-semibold transition-all"
          >
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
