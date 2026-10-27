import { ScrollProgress } from "./portfolio/ScrollProgress";
import { Navbar } from "./portfolio/Navbar";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Skills } from "./portfolio/Skills";
import { Projects } from "./portfolio/Projects";
import { WorkProcedure } from "./portfolio/WorkProcedure";
import { Experience } from "./portfolio/Experience";
import { Contact } from "./portfolio/Contact";
import { Footer } from "./portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#061B1B] text-[#F2F7F5] selection:bg-[#32D4C7]/20 selection:text-[#F2F7F5] relative">
      {/* Precision scroll tracking bar */}
      <ScrollProgress />

      {/* Global minimal navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkProcedure />
        <Experience />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
