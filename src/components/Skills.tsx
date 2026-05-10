"use client";

import { motion } from "framer-motion";
import { Layout, Server, Zap, Cloud, Box, Database } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiVuetify,
  SiAntdesign,
  SiNodedotjs,
  SiFastify,
  SiExpress,
  SiPostman,
  SiSocketdotio,
  SiRedis,
  SiMongodb,
  SiPusher,
  SiWhatsapp,
  SiGooglemaps,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiPm2,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaEnvelope } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const skillGroups = [
  {
    title: "Frontend Frameworks",
    icon: Layout,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue 2 / 3", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vuetify", icon: SiVuetify },
      { name: "Ant Design", icon: SiAntdesign },
    ],
    size: "lg:col-span-2",
    description:
      "Developing complex SPAs and enterprise dashboards with high-performance reactive architectures.",
  },
  {
    title: "Backend Core",
    icon: Server,
    color: "from-purple-500/20 to-indigo-500/20",
    iconColor: "text-purple-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Fastify", icon: SiFastify },
      { name: "Express", icon: SiExpress },
      { name: "Google Maps", icon: SiGooglemaps },
      { name: "Postman", icon: SiPostman },
    ],
    size: "lg:col-span-1",
    description: "Architecting fast, secure, and resilient microservices.",
  },
  {
    title: "Real-time & Integrations",
    icon: Zap,
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    skills: [
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "Pusher", icon: SiPusher },
      { name: "Whatsapp API", icon: SiWhatsapp },
      { name: "Mailer Lite", icon: FaEnvelope },
      { name: "Redis", icon: SiRedis },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Server", icon: DiMsqlServer },
    ],
    size: "lg:col-span-1",
    description:
      "Handling high-concurrency data streams and third-party communication integrations.",
  },
  {
    title: "Cloud & Ops",
    icon: Cloud,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    skills: [
      { name: "AWS S3", icon: FaAws },
      { name: "AWS EC2", icon: FaAws },
      { name: "CloudFront", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "PM2", icon: SiPm2 },
      { name: "Linux / Terminal", icon: SiLinux },
    ],
    size: "lg:col-span-2",
    description:
      "Deploying resilient infrastructure, global content delivery, and process management with PM2 and Linux.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <Box size={14} />
            <span>Tech Ecosystem</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Mastered <span className="text-gradient">Technologies.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative glass rounded-[2.5rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ${group.size} overflow-hidden`}
            >
              {/* Internal Background Glow */}
              <div
                className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${group.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700 blur-3xl -z-10`}
              />

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center ${group.iconColor}`}
                  >
                    <group.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {group.title}
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-current to-transparent opacity-30 mt-1" />
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-10 max-w-md">
                  {group.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-auto">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="flex flex-col items-center justify-center p-4 rounded-3xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 group/skill"
                    >
                      <div className="relative w-8 h-8 mb-3 flex items-center justify-center">
                        {/* Skill background glow */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover/skill:opacity-100 blur-md transition-opacity duration-300 -z-10`}
                        />
                        <skill.icon
                          size={28}
                          className={`${group.iconColor} transition-colors duration-300 group-hover/skill:text-gray-900`}
                        />
                      </div>
                      <span className="text-[10px] font-black text-center uppercase tracking-tighter text-gray-700">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
