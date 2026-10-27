import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Terminal, MapPin, Sparkles } from "lucide-react";
import profileImg from "@/assets/samuel-profile.jpg";
import resumePdf from "@/assets/samuel wondimu cv .pdf";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background ambient teal lighting */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-[#32D4C7]/10 blur-[130px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[420px] h-[420px] rounded-full bg-[#103332]/60 blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Dominant Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Metadata Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#204342] bg-[#0B2928]/90 text-[#32D4C7] font-mono-meta text-xs tracking-wider mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32D4C7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#32D4C7]" />
              </span>
              <span>FULL-STACK DEVELOPER / YANOLTECH</span>
              <span className="text-[#204342]">|</span>
              <span className="text-[#A4BBB6] hidden sm:inline">JIMMA UNIV CS '26</span>
            </motion.div>

            {/* Author Title Label */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-mono-meta uppercase tracking-[0.25em] text-[#A4BBB6] mb-3"
            >
              Portfolio of Samuel Wondimu
            </motion.p>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-light text-[#F2F7F5] tracking-tight leading-[1.05]"
            >
              Building digital <br />
              <span className="italic font-normal text-[#82E8DD]">experiences</span> that <br />
              make an <span className="text-[#32D4C7] font-normal">impact.</span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-[#A4BBB6] leading-relaxed max-w-xl font-sans"
            >
              Full-Stack Developer at{" "}
              <strong className="text-[#F2F7F5] font-medium">YanolTech</strong> and Computer Science
              graduate from <strong className="text-[#F2F7F5] font-medium">Jimma University</strong>
              . I engineer high-performance web applications, robust enterprise systems, and
              intuitive user experiences with clean code and modern architecture.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#32D4C7] hover:bg-[#82E8DD] text-[#061B1B] text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(50,212,199,0.35)] hover:shadow-[0_0_35px_rgba(50,212,199,0.55)] hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#204342] hover:border-[#32D4C7]/60 bg-[#0B2928]/50 hover:bg-[#103332] text-[#F2F7F5] text-sm font-medium transition-all duration-300"
              >
                <Mail size={16} className="text-[#32D4C7]" />
                <span>Get In Touch</span>
              </a>

              <a
                href={resumePdf}
                download="Samuel_Wondimu_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full border border-[#204342]/60 hover:border-[#204342] text-[#A4BBB6] hover:text-[#F2F7F5] text-xs font-mono-meta tracking-wider transition-colors"
                title="Download verified curriculum vitae"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Micro Technical Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 pt-6 border-t border-[#204342]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono-meta text-[#728B86]"
            >
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-[#32D4C7]" />
                <span>PRIMARY STACK: REACT · NEXT.JS · NODE · POSTGRESQL</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-[#32D4C7]" />
                <span>ADDIS ABABA / REMOTE WORLDWIDE</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Atmospheric Visual Centerpiece */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Decorative background glow & accent lines */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#32D4C7]/20 via-[#103332]/40 to-transparent blur-2xl -z-10" />

              {/* Architectural Frame */}
              <div className="relative rounded-3xl p-3 border border-[#204342] bg-[#0B2928]/80 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]">
                {/* Top architectural bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#204342]/60 mb-3 text-[10px] font-mono-meta text-[#728B86]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#32D4C7]" />
                    PORTRAIT / VERIFIED
                  </span>
                  <span>ID: SW-2026</span>
                </div>

                {/* Portrait Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#081F1F]">
                  <img
                    src={profileImg}
                    alt="Samuel Wondimu - Full-Stack Developer at YanolTech"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[0.98] transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Subtle dark teal gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B1B] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#32D4C7]/20 rounded-2xl pointer-events-none" />

                  {/* Corner Coordinates */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#061B1B]/70 backdrop-blur border border-[#204342]/60 font-mono-meta text-[9px] text-[#82E8DD]">
                    09°01'N 38°45'E
                  </div>
                </div>

                {/* Bottom Floating Details Card */}
                <div className="mt-3 p-3.5 rounded-xl border border-[#204342] bg-[#103332]/90 backdrop-blur flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-[#F2F7F5] flex items-center gap-1.5">
                      <Sparkles size={12} className="text-[#32D4C7]" />
                      Samuel Wondimu
                    </p>
                    <p className="text-[11px] text-[#A4BBB6] font-mono-meta mt-0.5">
                      Full-Stack Developer · YanolTech
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono-meta bg-[#32D4C7]/15 text-[#32D4C7] border border-[#32D4C7]/30">
                      Open to Work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center gap-2 text-center"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 font-mono-meta text-[10px] tracking-widest text-[#728B86] hover:text-[#32D4C7] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#32D4C7] to-transparent animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
