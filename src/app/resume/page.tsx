"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft, Printer, Mail, Phone, Globe } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const resumeData = {
  name: "Gaurav Shukla",
  title: "Senior Solutions Architect & Fintech Lead",
  location: "Mirzapur, Uttar Pradesh",
  specialization: "Flutter, Node.js, FastAPI, & AI Systems",
  contact: {
    email: "gauravshukla.ec1022@gmail.com",
    phone: "+91-7376603602",
    linkedin: "linkedin.com/in/gauravshukla82",
    github: "github.com/Gauravshukla82",
    portfolio: "gauravshukla82.github.io/Updated-Portfolio/",
  },
  summary: "Senior Solutions Architect specializing in scaling complex fintech, workforce management, and AI-driven ecosystems. Expert in Flutter mobile apps with Node.js/FastAPI backends. Double GATE-qualified (M.Tech) with deep expertise in automating financial operations, risk assessments, and high-fidelity reporting systems.",
  skills: [
    {
      category: "Frontend & Mobile",
      items: "Flutter, Vue.js, React.js, Next.js, Redux, Chakra UI, Tailwind CSS, PWA"
    },
    {
      category: "Backend & AI",
      items: "Node.js, FastAPI, Chainlit, LangChain, REST API, WebSockets, Fastify"
    },
    {
      category: "Data & Ops",
      items: "TypeScript, Python, PostgreSQL, MongoDB, MySQL, Docker, PM2, GitHub/GitLab"
    },
    {
      category: "Specialized",
      items: "P&L/Trial Balance, Double-entry Accounting, Geofencing, PDF/Excel Automation"
    }
  ],
  experience: [
    {
      role: "Senior Full-Stack & Fintech Lead",
      company: "MyFinfi World Pvt Ltd",
      period: "July 2023 – Present",
      bullets: [
        "Architected real-time P&L and Trial Balance engines with complex ledger aggregation and double-entry principles.",
        "Engineered large-scale migration of financial data with 100% integrity across SQL and NoSQL ecosystems.",
        "Deployed AI Chat Agent using Chainlit and FastAPI with advanced session persistence.",
        "Built automated asset classification and provisioning systems using live DPD data for accounting accuracy.",
        "Led migration to API-driven tracking systems, improving field validation accuracy by 40%.",
        "Designed end-to-end multi-tenant architecture across Flutter apps, admin dashboards, and financial engines.",
        "Delivered geofencing-enabled attendance systems with QR workflows and branch-based control logic."
      ]
    },
    {
      role: "Content Developer",
      company: "PrepLadder",
      period: "Jun 2021 – Oct 2022",
      bullets: [
        "Curated high-accuracy technical content for engineering examinations and competitive learning systems."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "NIT Itanagar",
      period: "Jul 2016 – Jun 2017",
      bullets: [
        "Mentored core engineering curriculum and supervised laboratory operations."
      ]
    }
  ],
  education: [
    {
      degree: "Full Stack Development",
      institution: "Masai School",
      period: "2023",
      location: "Bangalore"
    },
    {
      degree: "M.Tech (ECE)",
      institution: "NIT Itanagar",
      period: "2017",
      location: "Itanagar"
    },
    {
      degree: "B.Tech (ECE)",
      institution: "United Institute (UIT)",
      period: "2015",
      location: "Allahabad"
    }
  ],
  projects: [
    {
      title: "Auto-Trading Bot & Backtesting",
      tech: "Node.js, Redis, Kotak Neo API, Python",
      bullets: [
        "Built a high-frequency trading system with live order execution and backtesting using Kotak Neo API."
      ]
    },
    {
      title: "Savari App (Uber Clone)",
      tech: "React, Node.js, MongoDB, Google Maps API",
      bullets: [
        "Architected ride-hailing platform with real-time tracking and location-aware route calculation."
      ]
    },
    {
      title: "Magna Men (E-commerce)",
      tech: "React, REST API, Order Management",
      bullets: [
        "Developed collaborative workflows including CRUD, cart management, and user/admin auth."
      ]
    }
  ],
  achievements: [
    "GATE 2015 & 2020 Qualified (Electronics & Communication).",
    "Certified Full Stack Developer (Masai School).",
    "Expertise in financial data integrity and accounting automation."
  ]
};

export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 print:p-0 print:bg-white font-sans text-gray-900 leading-tight">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0mm;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            height: 100%;
            -webkit-print-color-adjust: exact;
          }
          .print-controls {
            display: none !important;
          }
          .resume-container {
            display: block !important;
            visibility: visible !important;
            width: 100% !important;
            height: 297mm !important;
            padding: 8mm 12mm !important; /* Reduced top/bottom padding for print */
            margin: 0 !important;
            background: white !important;
            border: none !important;
            box-shadow: none !important;
            overflow: hidden !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .resume-container .flex { display: flex !important; }
          .resume-container .grid { display: grid !important; }
        }
      `}</style>

      {/* Controls */}
      <div className="print-controls max-w-[850px] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link 
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="font-semibold text-sm">Back to Portfolio</span>
        </Link>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
        >
          <Printer size={18} />
          <span>Save PDF</span>
        </button>
      </div>

      {/* Resume Document */}
      <div className="resume-container max-w-[850px] mx-auto bg-white shadow-2xl p-12 mb-20">
        
        {/* Header Area */}
        <div className="border-b-2 border-gray-800 pb-4 mb-5 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-1">{resumeData.name}</h1>
            <p className="text-md font-bold text-blue-700">{resumeData.title}</p>
            <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{resumeData.specialization}</p>
          </div>
          <div className="text-right text-[12px] font-medium space-y-1">
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center justify-end gap-2 hover:text-blue-600 transition-colors">
              {resumeData.contact.email} <Mail size={12} className="text-blue-600" />
            </a>
            <a href={`tel:${resumeData.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-end gap-2 hover:text-blue-600 transition-colors">
              {resumeData.contact.phone} <Phone size={12} className="text-blue-600" />
            </a>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-blue-600 transition-colors">
              LinkedIn <FaLinkedin size={12} className="text-blue-600" />
            </a>
            <a href={`https://${resumeData.contact.portfolio}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-blue-600 transition-colors">
              Portfolio <Globe size={12} className="text-blue-600" />
            </a>
            <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-blue-600 transition-colors">
              GitHub <FaGithub size={12} className="text-blue-600" />
            </a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest text-gray-700">Profile Summary</h2>
          <p className="text-[13px] text-gray-700 leading-snug">
            {resumeData.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest text-gray-700">Technical Skill Matrix</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
            {resumeData.skills.map((skill, idx) => (
              <div key={idx} className="text-[12px]">
                <span className="font-bold text-gray-900">{skill.category}:</span> <span className="text-gray-600">{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-3 tracking-widest text-gray-700">Professional Experience</h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-[10px] font-black text-gray-400 uppercase">{exp.period}</span>
                </div>
                <p className="text-[12px] font-bold text-blue-600 mb-1.5">{exp.company}</p>
                <ul className="grid grid-cols-1 gap-1">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[12px] text-gray-700 flex gap-2">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-7">
            <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest text-gray-700">Education</h2>
            <div className="space-y-2">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-[12px]">
                  <div>
                    <p className="font-bold text-gray-900">{edu.degree}</p>
                    <p className="text-[11px] text-gray-500">{edu.institution} | {edu.location}</p>
                  </div>
                  <span className="text-[10px] font-black text-gray-400">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="col-span-5">
            <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest text-gray-700">Achievements</h2>
            <ul className="space-y-1">
              {resumeData.achievements.map((ach, idx) => (
                <li key={idx} className="text-[12px] text-gray-700 flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Projects */}
        <section className="mt-5">
          <h2 className="text-[14px] font-black uppercase border-b border-gray-200 pb-1 mb-2 tracking-widest text-gray-700">Technical Projects</h2>
          <div className="grid grid-cols-3 gap-6">
            {resumeData.projects.map((project, idx) => (
              <div key={idx}>
                <h3 className="text-[11px] font-bold text-gray-900 mb-0.5 uppercase">{project.title}</h3>
                <p className="text-[9px] font-bold text-blue-500 mb-1">{project.tech}</p>
                <p className="text-[10px] text-gray-600 leading-tight">{project.bullets[0]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Area */}
        <div className="mt-auto pt-8 flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase tracking-widest border-t border-gray-100">
          <span>Portfolio: {resumeData.contact.portfolio}</span>
          <span>Verified Senior Architect Profile</span>
        </div>

      </div>
    </main>
  );
}
