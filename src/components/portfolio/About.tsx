import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Code2, Server, Database, Sparkles, CheckCircle2, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full bg-[#103332]/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / BACKGROUND & PHILOSOPHY"
          title="Turning complex ideas into"
          titleItalic="resilient digital products."
          description="A disciplined approach to full-stack engineering, blending system reliability with refined user interaction."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-[#A4BBB6] text-base sm:text-lg leading-relaxed font-sans"
          >
            <p className="text-[#F2F7F5] font-display text-2xl sm:text-3xl font-light leading-snug">
              "Engineering software is not merely about writing lines of code — it is about
              delivering dependable systems that solve real-world problems with elegance and
              longevity."
            </p>

            <p>
              I am a Computer Science graduate from{" "}
              <strong className="text-[#F2F7F5]">Jimma University</strong> (graduating with a{" "}
              <strong className="text-[#32D4C7]">3.62 / 4.00 CGPA</strong>) and a Full-Stack
              Developer at <strong className="text-[#F2F7F5]">YanolTech</strong>. My focus spans
              end-to-end web architectures: from database schema design and secure RESTful APIs to
              fluid, accessible frontend interfaces.
            </p>

            <p>
              During my tenure at YanolTech, I spearheaded the development of the company's
              comprehensive <strong className="text-[#82E8DD]">HR Management System</strong> —
              centralizing employee directories, attendance records, and leave approval workflows
              into a cohesive enterprise platform.
            </p>

            <p>
              Previously, as a Full-Stack Developer Intern at{" "}
              <strong className="text-[#F2F7F5]">Efuye Gela</strong>, I collaborated across
              multidisciplinary sprint teams, engineering production features and optimizing user
              flows. I thrive when translating complex system requirements into seamless,
              high-performance software.
            </p>

            {/* Core Values Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-meta text-xs text-[#F2F7F5]">
              <div className="flex items-center gap-2 p-3 rounded-xl border border-[#204342] bg-[#0B2928]/60">
                <CheckCircle2 size={16} className="text-[#32D4C7] shrink-0" />
                <span>Clean, maintainable architecture</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl border border-[#204342] bg-[#0B2928]/60">
                <CheckCircle2 size={16} className="text-[#32D4C7] shrink-0" />
                <span>Responsive & accessible UI</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl border border-[#204342] bg-[#0B2928]/60">
                <CheckCircle2 size={16} className="text-[#32D4C7] shrink-0" />
                <span>Robust backend APIs & security</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl border border-[#204342] bg-[#0B2928]/60">
                <CheckCircle2 size={16} className="text-[#32D4C7] shrink-0" />
                <span>Performance-focused delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Supporting Highlights & Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Metric Card 1: Education */}
            <div className="p-6 rounded-2xl border border-[#204342] bg-[#0B2928]/80 backdrop-blur hover:border-[#32D4C7]/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-meta text-xs text-[#728B86] uppercase tracking-wider">
                  ACADEMIC RECORD
                </span>
                <span className="p-2 rounded-lg bg-[#32D4C7]/10 text-[#32D4C7]">
                  <Award size={18} />
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-display font-light text-[#F2F7F5]">3.62</span>
                <span className="text-sm font-mono-meta text-[#A4BBB6]">/ 4.00 CGPA</span>
              </div>
              <p className="mt-2 text-sm text-[#F2F7F5] font-medium">
                B.Sc. in Computer Science · Jimma University
              </p>
              <p className="mt-1 text-xs text-[#728B86]">
                Comprehensive foundation in data structures, algorithms, systems & software
                architecture.
              </p>
            </div>

            {/* Metric Card 2: Professional Role */}
            <div className="p-6 rounded-2xl border border-[#204342] bg-[#0B2928]/80 backdrop-blur hover:border-[#32D4C7]/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-meta text-xs text-[#728B86] uppercase tracking-wider">
                  CURRENT ROLE
                </span>
                <span className="p-2 rounded-lg bg-[#32D4C7]/10 text-[#32D4C7]">
                  <Sparkles size={18} />
                </span>
              </div>
              <p className="text-2xl font-display font-light text-[#F2F7F5]">
                Full-Stack Developer
              </p>
              <p className="mt-1 text-sm text-[#32D4C7] font-medium">YanolTech</p>
              <p className="mt-2 text-xs text-[#728B86] leading-relaxed">
                Building enterprise management software, custom internal tools, and modern web
                applications with React, Node.js, and relational databases.
              </p>
            </div>

            {/* Metric Card 3: Engineering Scope */}
            <div className="p-6 rounded-2xl border border-[#204342] bg-[#0B2928]/80 backdrop-blur hover:border-[#32D4C7]/40 transition-colors">
              <span className="font-mono-meta text-xs text-[#728B86] uppercase tracking-wider block mb-3">
                TECHNICAL DISCIPLINES
              </span>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <span className="flex items-center gap-2 text-[#F2F7F5]">
                    <Code2 size={14} className="text-[#32D4C7]" />
                    Frontend Engineering
                  </span>
                  <span className="text-[#728B86]">React · Next.js · TS</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <span className="flex items-center gap-2 text-[#F2F7F5]">
                    <Server size={14} className="text-[#32D4C7]" />
                    Backend & API Systems
                  </span>
                  <span className="text-[#728B86]">Node.js · Express · PHP</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-meta">
                  <span className="flex items-center gap-2 text-[#F2F7F5]">
                    <Database size={14} className="text-[#32D4C7]" />
                    Database & ORM
                  </span>
                  <span className="text-[#728B86]">PostgreSQL · MySQL · Prisma</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
