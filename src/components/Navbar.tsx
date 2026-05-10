"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">
          GS<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-5 py-2 text-sm font-semibold rounded-full border border-blue-500/50 hover:bg-blue-500 hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0)] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}
