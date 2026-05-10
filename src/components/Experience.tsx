"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    company: "MyFinfi World Pvt Ltd",
    role: "Senior Solutions Architect & Fintech Lead",
    duration: "Present",
    achievements: [
      "Spearheading the technical vision and architecture for enterprise-grade fintech platforms.",
      "Leading a team of engineers to build scalable, fault-tolerant Node.js microservices.",
      "Architected and successfully executed a massive SQL to MongoDB data migration with zero downtime.",
      "Integrated complex trading APIs (Kotak Neo) enabling real-time order execution and position tracking.",
    ]
  },
  {
    company: "MyFinfi World Pvt Ltd",
    role: "Lead Backend Developer",
    duration: "Previous Role",
    achievements: [
      "Optimized legacy monolithic codebases, improving API response times by 60%.",
      "Designed and implemented role-based access control and secure authentication mechanisms.",
      "Developed an automated financial ledger system that processes thousands of daily transactions.",
    ]
  },
  {
    company: "PrepLadder",
    role: "Content Developer",
    duration: "Jun 2021 - Oct 2022 | Chandigarh, India",
    achievements: [
      "Designed and developed educational content for competitive exam preparation.",
      "Ensured high-quality delivery of technical and academic materials.",
      "Collaborated with cross-functional teams to align content with user needs.",
    ]
  },
  {
    company: "National Institute of Technology",
    role: "Teaching Assistant",
    duration: "Jul 2016 - Jun 2017 | Itanagar, India",
    achievements: [
      "Mentored junior engineering students in technical subjects.",
      "Assisted in grading and academic support for various engineering courses.",
      "Fostered a learning environment by simplifying complex technical concepts.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {experience.map((exp, idx) => (
            <div key={idx} className="mb-20 relative md:flex md:justify-between items-center w-full group">
              <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-black rounded-full border-2 border-blue-500 flex items-center justify-center z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Briefcase size={16} className="text-blue-400" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`ml-12 md:ml-0 md:w-[45%] glass p-8 rounded-2xl ${idx % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`}
              >
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full mb-4">
                  {exp.duration}
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-muted font-medium mb-6">{exp.company}</h4>
                <ul className={`space-y-3 ${idx % 2 === 0 ? "md:inline-block md:text-left" : ""}`}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
