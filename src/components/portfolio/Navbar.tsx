import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import resumePdf from "@/assets/samuel wondimu cv .pdf";

const NAV_ITEMS = [
  { id: "about", index: "01", label: "About" },
  { id: "skills", index: "02", label: "Skills" },
  { id: "projects", index: "03", label: "Projects" },
  { id: "process", index: "04", label: "Process" },
  { id: "experience", index: "05", label: "Experience" },
  { id: "contact", index: "06", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = ["home", ...NAV_ITEMS.map((item) => item.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#0B2928]/90 backdrop-blur-md border border-[#204342] shadow-[0_12px_30px_-10px_rgba(6,27,27,0.85)]"
              : "bg-[#0B2928]/60 backdrop-blur-sm border border-[#204342]/60"
          }`}
        >
          {/* Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32D4C7] rounded-md px-1 py-0.5"
          >
            <div className="w-8 h-8 rounded-full border border-[#32D4C7]/40 bg-[#103332] flex items-center justify-center font-display text-sm font-semibold text-[#32D4C7] group-hover:border-[#32D4C7] group-hover:scale-105 transition-all">
              SW
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider uppercase text-[#F2F7F5] group-hover:text-[#32D4C7] transition-colors">
                Samuel Wondimu
              </span>
              <span className="font-mono-meta text-[10px] tracking-widest text-[#728B86] uppercase">
                Full-Stack · YanolTech
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-1.5 text-xs font-mono-meta tracking-wider transition-all rounded-full ${
                    isActive ? "text-[#32D4C7] font-medium" : "text-[#A4BBB6] hover:text-[#F2F7F5]"
                  }`}
                >
                  <span className="text-[10px] text-[#728B86] mr-1">{item.index}.</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-[#32D4C7]/40 bg-[#32D4C7]/10 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={resumePdf}
              download="Samuel_Wondimu_CV.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono-meta text-[#A4BBB6] hover:text-[#32D4C7] px-3 py-1.5 rounded-full border border-[#204342] hover:border-[#32D4C7]/40 transition-colors"
              title="Download Samuel Wondimu CV"
            >
              <Download size={13} />
              <span>CV</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#32D4C7] hover:bg-[#82E8DD] text-[#061B1B] text-xs font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(50,212,199,0.3)] hover:shadow-[0_0_25px_rgba(50,212,199,0.5)] hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 rounded-full border border-[#204342] bg-[#103332] text-[#F2F7F5] hover:text-[#32D4C7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#32D4C7]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden mt-2 p-5 rounded-3xl bg-[#0B2928]/95 backdrop-blur-xl border border-[#204342] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#32D4C7]/15 text-[#32D4C7] font-medium border border-[#32D4C7]/30"
                          : "text-[#A4BBB6] hover:text-[#F2F7F5] hover:bg-[#103332]"
                      }`}
                    >
                      <span className="font-mono-meta text-sm">{item.label}</span>
                      <span className="font-mono-meta text-xs text-[#728B86]">{item.index}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-[#204342] flex flex-col gap-2.5">
                <a
                  href={resumePdf}
                  download="Samuel_Wondimu_CV.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#204342] bg-[#103332] text-xs font-mono-meta text-[#F2F7F5]"
                >
                  <Download size={14} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#32D4C7] text-[#061B1B] text-xs font-semibold tracking-wide"
                >
                  <span>Initiate Collaboration</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
