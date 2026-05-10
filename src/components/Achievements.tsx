"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp, Cpu } from "lucide-react";

export default function Achievements() {
  const highlights = [
    {
      icon: Trophy,
      title: "Zero Downtime Migrations",
      description: "Successfully orchestrated the migration of millions of critical financial ledger entries from SQL to MongoDB, maintaining 100% data integrity and zero operational downtime.",
    },
    {
      icon: TrendingUp,
      title: "Backend Optimizations",
      description: "Refactored legacy REST APIs and database queries, resulting in a 60% reduction in average response times and significantly lowering server resource consumption.",
    },
    {
      icon: Cpu,
      title: "System Design Impact",
      description: "Architected a scalable, high-frequency proxy platform for trading API integrations, bypassing complex WAF restrictions and handling thousands of concurrent requests with sub-50ms latency.",
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Key <span className="text-gradient">Highlights</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <item.icon size={120} />
              </div>
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <item.icon size={32} className="text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-muted leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
