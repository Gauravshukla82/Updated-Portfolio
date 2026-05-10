"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Advanced Auto-Trading Platform",
    description:
      "A sophisticated algorithmic trading system featuring live order execution, backtesting engines, and real-time portfolio management. Integrated with Kotak Neo API for high-frequency trading across various asset classes.",
    tech: [
      "Node.js",
      "Redis",
      "WebSocket",
      "React",
      "Backtesting.py",
      "Fastify",
    ],
    image: "/trading-api.png",
    achievements: [
      "Developed a robust live trading engine with sub-second order latency.",
      "Built a comprehensive backtesting module to validate strategies against historical data.",
      "Implemented real-time portfolio tracking and detailed order history analytics.",
    ],
    color: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
    github: "https://github.com/Gauravshukla82/Kotak-Trading",
    demo: "#",
  },
  {
    title: "MyFinfi Fintech Suite",
    description:
      "An enterprise-grade ecosystem of financial tools developed at MyFinfi. Includes automated multi-branch ledger systems and high-performance data processing pipelines.",
    tech: ["Node.js", "MongoDB", "React", "Express", "Mongoose"],
    image: "/myfinfi.png",
    achievements: [
      "Architected a robust SQL-to-NoSQL migration engine with 100% integrity.",
      "Developed a geo-fenced workforce management system for 100+ branches.",
      "Built an automated multi-branch financial ledger system.",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    github: "https://github.com/Gauravshukla82",
    demo: "#",
  },
  {
    title: "Clone of Destination XL (Magna Men)",
    description:
      "A comprehensive e-commerce clone of destinationxl.com, built to provide a seamless shopping experience for plus-sized men's clothing. Features include advanced filtering, cart management, and a robust admin dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "REST API", "JSON"],
    image: "/magna-men.png",
    achievements: [
      "Integrated Login & Signup functionality with Admin access.",
      "Developed a dynamic Products page with sorting, filtering, and pagination.",
      "Built a complete Cart & Payment flow with order tracking.",
    ],
    color: "from-purple-500/20 to-indigo-500/20",
    border: "group-hover:border-purple-500/50",
    github: "https://github.com/Gauravshukla82/Magna-Men",
    demo: "https://magnamen.netlify.app/",
  },
  {
    title: "Clone of Uber App (Savari App)",
    description:
      "A feature-rich ride-booking platform clone that mimics the core functionality of Uber. Includes real-time location search, cab booking, and a dedicated driver dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chakra UI",
      "Google Maps API",
    ],
    image: "/savari-app.png",
    achievements: [
      "Implemented User & Driver Login/Signup with secure authentication.",
      "Integrated Google Maps for real-time location search and route mapping.",
      "Developed a Driver Dashboard for accepting/rejecting ride requests.",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    github: "https://github.com/Gauravshukla82/ambiguous-oven-8467",
    demo: "https://savariapp.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg md:text-xl max-w-2xl"
          >
            Real-world systems engineered for scale, reliability, and extreme
            performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`group glass rounded-3xl p-8 md:p-12 transition-all duration-500 border border-white/5 ${project.border} relative overflow-hidden`}
            >
              {/* Dynamic Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                      {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                        <ArrowUpRight size={20} />
                      </a> */}
                    </div>
                  </div>

                  <p className="text-muted text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-muted"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/3 flex flex-col gap-6">
                  {project.image && (
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-colors shadow-2xl">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm whitespace-nowrap text-muted group-hover:text-foreground transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
