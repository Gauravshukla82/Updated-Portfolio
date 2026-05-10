"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Masai School",
    degree: "Full Stack Web Development",
    duration: "Nov 2022 - Jul 2023 | Bangalore",
    details: [
      "Intensive bootcamp focused on MERN stack development.",
      "Hands-on experience building complex clones and full-stack applications.",
      "Collaborative project-based learning with a focus on real-world industry standards.",
    ]
  },
  {
    institution: "National Institute of Technology",
    degree: "Master of Technology",
    duration: "Jul 2015 - Jul 2017 | Itanagar",
    details: [
      "Advanced studies in engineering and technology.",
      "Focused on research and development in technical domains.",
      "Participated in teaching assistantship roles to mentor junior students.",
    ]
  },
  {
    institution: "United Institute of Technology",
    degree: "Bachelor of Technology",
    duration: "Jul 2011 - Jun 2015 | Allahabad",
    details: [
      "Foundation in engineering principles and electronics.",
      "Completed rigorous coursework in technical and analytical subjects.",
      "Developed a passion for programming and software engineering.",
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-black/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Educational <span className="text-gradient">Background</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {education.map((edu, idx) => (
            <div key={idx} className="mb-20 relative md:flex md:justify-between items-center w-full group">
              <div className="absolute left-[-2px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-black rounded-full border-2 border-blue-500 flex items-center justify-center z-10 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                <GraduationCap size={16} className="text-blue-400" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`ml-12 md:ml-0 md:w-[45%] glass p-8 rounded-2xl ${idx % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`}
              >
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full mb-4">
                  {edu.duration}
                </div>
                <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                <h4 className="text-muted font-medium mb-6">{edu.institution}</h4>
                <ul className={`space-y-3 ${idx % 2 === 0 ? "md:inline-block md:text-left" : ""}`}>
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{detail}</span>
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
