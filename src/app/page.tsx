import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      
      <div className="flex flex-col gap-12 md:gap-24">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>

      <footer className="py-8 border-t border-white/5 text-center text-muted text-sm mt-20">
        <p>© {new Date().getFullYear()} Gaurav Shukla. Designed & Built with extreme performance in mind.</p>
      </footer>
    </main>
  );
}
