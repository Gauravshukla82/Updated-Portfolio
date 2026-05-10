"use client";

import { motion } from "framer-motion";
import { Layers, Network, Zap, Lock, Database } from "lucide-react";

export default function SystemDesign() {
  return (
    <section id="architecture" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            System <span className="text-gradient">Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            A deep dive into how I approach scalability, performance, and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Abstract Diagram Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] w-full glass rounded-3xl p-8 flex items-center justify-center overflow-hidden"
          >
            {/* Animated Nodes */}
            <div className="absolute w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]" />
            <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[60px]" />
            
            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              <div className="flex justify-center">
                <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-2xl flex items-center gap-3 backdrop-blur-md">
                  <Network className="text-blue-400" />
                  <span className="font-mono text-sm">Load Balancer (Nginx/AWS ELB)</span>
                </div>
              </div>
              
              <div className="flex justify-between relative mt-4">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center gap-2">
                  <Layers className="text-green-400" size={20} />
                  <span className="font-mono text-xs">Node.js Auth Service</span>
                </div>
                <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center gap-2">
                  <Layers className="text-purple-400" size={20} />
                  <span className="font-mono text-xs">Fastify Trade Proxy</span>
                </div>
                <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center gap-2">
                  <Layers className="text-yellow-400" size={20} />
                  <span className="font-mono text-xs">Data Sync Worker</span>
                </div>
              </div>

              <div className="flex justify-center gap-8 mt-4">
                <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-3 w-1/2 justify-center">
                  <Database className="text-red-400" />
                  <span className="font-mono text-sm">Redis (Cache/PubSub)</span>
                </div>
                <div className="px-8 py-4 bg-white/5 border border-white/10 rounded-3xl flex items-center gap-3 w-1/2 justify-center">
                  <Database className="text-blue-500" />
                  <span className="font-mono text-sm">MongoDB Cluster</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="text-yellow-400" />
                <h3 className="text-xl font-bold">Performance Optimization</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Implemented caching layers using Redis to reduce database hits by 80%. Optimized MongoDB queries by introducing compound indexing and projection mapping. Transitioned heavy synchronous operations to background worker threads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Network className="text-blue-400" />
                <h3 className="text-xl font-bold">Scalability Decisions</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Architected microservices around domain boundaries. Used PM2 and Docker for horizontal scaling of Node.js clusters. Implemented Idempotent API designs to ensure safe retries during network failures in financial transactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Lock className="text-emerald-400" />
                <h3 className="text-xl font-bold">Security & Data Integrity</h3>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Designed WAF-compliant proxy headers for secure trading API communication. Implemented robust JWT-based auth with automatic token rotation. Ensured 100% ACID compliance at the application level during SQL to NoSQL migrations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Need to import Database from lucide-react since it was used
// Wait, I missed importing Database. Let me fix the import.
