"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleWhatsApp = () => {
    const { name, email, message } = formData;
    if (!name || !message) {
      alert("Please fill in your name and message.");
      return;
    }
    const text = encodeURIComponent(
      `Hi Gaurav, I'm ${name} (${email}).\n\n${message}`,
    );
    window.open(`https://wa.me/917376603602?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1a9f994d-6093-4879-b25e-9d40e600fdb4",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-white/50"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's build something{" "}
                <span className="text-gradient">extraordinary.</span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg mb-12"
              >
                Whether you need a complex system architected from scratch or an
                existing platform optimized for extreme scale, I'm here to help.
              </motion.p>

              <div className="space-y-6">
                <a
                  href="mailto:gauravshukla.ec1022@gmail.com"
                  className="flex items-center gap-4 text-muted hover:text-blue-600 transition-colors group"
                >
                  <div className="p-4 bg-white/5 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <Mail
                      size={24}
                      className="group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <span className="text-lg">gauravshukla.ec1022@gmail.com</span>
                </a>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/gauravshukla82/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass hover:bg-white/10 rounded-full transition-colors group"
                  >
                    <FaLinkedin
                      size={24}
                      className="text-muted group-hover:text-blue-400 transition-colors"
                    />
                  </a>
                  <a
                    href="https://github.com/Gauravshukla82"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass hover:bg-blue-600/20 rounded-full transition-colors group"
                  >
                    <FaGithub
                      size={24}
                      className="text-muted group-hover:text-blue-400 transition-colors"
                    />
                  </a>
                  <button
                    onClick={handleWhatsApp}
                    className="p-4 glass hover:bg-green-500/20 rounded-full transition-colors group"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp
                      size={24}
                      className="text-muted group-hover:text-green-500 transition-colors"
                    />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-8 glass rounded-3xl border border-white/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/50 border border-black/5 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-50"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "success" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <span>Send via Email</span>
                      <motion.div
                        animate={{
                          x: isHovered ? 5 : 0,
                          y: isHovered ? -5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Send size={18} />
                      </motion.div>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-white/80 border border-green-500/30 text-green-600 hover:bg-green-50 transition-all rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  <span>Message on WhatsApp</span>
                </button>
              </div>

              {status === "success" && (
                <p className="text-green-600 text-center font-medium">
                  Thanks! I'll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
