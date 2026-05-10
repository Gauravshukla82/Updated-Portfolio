"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Code, Rocket, Users } from "lucide-react";

const Counter = ({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(
          (timestamp - startTime) / (duration * 1000),
          1,
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gradient">
      {count}
      {suffix}
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Building the <span className="text-gradient">Future</span> <br />{" "}
              of the Web.
            </h2>
            <div className="space-y-6 text-lg text-muted">
              <p>
                I am a Full Stack Developer with expertise in programming
                languages such as JavaScript, HTML/CSS and web development
                frameworks like React, Redux, and Next.js. I specialize in
                creating seamless digital experiences that bridge the gap
                between complex functionality and intuitive user interfaces.
              </p>
              <p>
                My technical journey is fueled by a passion for continuous
                learning and a dedication to crafting exceptional digital
                products. Whether it's architecting a robust backend or
                designing a responsive, interactive frontend, I focus on
                delivering high-impact solutions that exceed expectations.
              </p>
              <p>
                Beyond code, I am committed to engineering excellence,
                empowering teams, and staying at the forefront of emerging
                technologies to drive innovation in every project I undertake.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Code, label: "Years Experience", value: 3, suffix: "+" },
              {
                icon: Rocket,
                label: "Projects Delivered",
                value: 15,
                suffix: "+",
              },
              {
                icon: Users,
                label: "Engineers Mentored",
                value: 20,
                suffix: "+",
              },
              {
                icon: Brain,
                label: "System Migrations",
                value: 5,
                suffix: "+",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-4 bg-blue-500/10 rounded-xl mb-4 text-blue-400">
                  <stat.icon size={28} />
                </div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <span className="text-sm font-medium text-muted mt-2 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
