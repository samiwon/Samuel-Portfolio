import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight, Github, Sparkles, ShieldCheck, Layers, ExternalLink } from "lucide-react";
import type { ProjectItem } from "./types";

import projectYanolTech from "@/assets/project-yanoltech-hr.jpg";
import projectMindmate from "@/assets/project-mindmate.jpg";
import projectDietapp from "@/assets/project-dietapp2.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

const FEATURED_ENTERPRISE_PROJECT: ProjectItem = {
  id: "yanoltech-hrms",
  title: "YanolTech HR Management System",
  category: "Enterprise Software / Human Resources",
  organization: "YanolTech",
  featured: true,
  badge: "Primary Professional Engagement",
  description:
    "A comprehensive enterprise human resources platform developed for YanolTech to centralize organizational workflows, streamline employee records, track daily attendance metrics, and enforce hierarchical leave approvals.",
  detailedFeatures: [
    "Comprehensive employee profiles & departmental hierarchy",
    "Real-time attendance logging with weekly trend visualization",
    "Automated multi-tier leave request and approval workflows",
    "Role-based permission controls (Admin, HR Manager, Department Head, Staff)",
  ],
  tech: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "RESTful API"],
  image: projectYanolTech,
  isRepresentativeMockup: true,
};

const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "mindmate-ai",
    title: "MindMate AI – Mental Wellness Assistant",
    category: "Full-Stack Web / Artificial Intelligence",
    description:
      "An AI-powered mental wellness companion engineered to provide compassionate conversational support. Features intelligent prompt routing, mood tracking logs, and analytical sentiment breakdowns.",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Groq AI API"],
    image: projectMindmate,
    github: "https://github.com/samiwon/Mental-Wellness-Assistance",
    demo: "https://mental-wellness-assistance.vercel.app/",
  },
  {
    id: "dietapp",
    title: "DietApp – Native Calorie & Nutrition Tracker",
    category: "Native Mobile Engineering / Android",
    description:
      "Native Android calorie and nutrition tracking application built with Java utilizing the MVC architectural pattern. Integrates SQLite for reliable offline persistence, an interactive DatePicker calendar, and an administrative oversight dashboard.",
    tech: ["Java", "Android SDK", "MVC Architecture", "SQLite", "RecyclerView"],
    image: projectDietapp,
    github: "https://github.com/samiwon/smartdietsystem",
    demo: "https://github.com/samiwon/smartdietsystem",
  },
  {
    id: "av-messenger",
    title: "AV Messenger – Cross-Platform Mobile Application",
    category: "Mobile Application / Real-Time Systems",
    description:
      "Cross-platform mobile application engineered for responsive communication, secure messaging interfaces, and real-time state synchronization.",
    tech: ["React Native", "TypeScript", "RESTful APIs", "Mobile UI Architecture"],
    image: projectMobile,
    github: "https://github.com/samiwon/AV_Messenger",
    demo: "https://github.com/samiwon/AV_Messenger",
  },
  {
    id: "portfolio-system",
    title: "Samuel Portfolio & Cinematic Design System",
    category: "Web Engineering & Design Architecture",
    description:
      "Editorial developer portfolio and custom dark teal design system developed using React, TanStack Start/Router, and Tailwind CSS with fluid clamp typography and fine atmospheric lighting.",
    tech: ["React", "TanStack Start", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: projectPortfolio,
    github: "https://github.com/samiwon/Samuel-Portfolio",
    demo: "https://samuel-portfolio-blue.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background illumination */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#32D4C7]/5 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Engineered with precision and"
          titleItalic="real-world utility."
          description="A curated selection of enterprise applications, AI-assisted tools, and native software crafted with clean code and robust systems."
        />

        {/* =========================================================================
            MAJOR FEATURED ENTERPRISE PROJECT: YANOLTECH HRMS
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 rounded-3xl border border-[#32D4C7]/30 bg-gradient-to-b from-[#0B2928] to-[#081F1F] p-6 sm:p-10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] relative overflow-hidden group"
        >
          {/* Subtle top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#32D4C7] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual showcase column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#204342] shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#061B1B]">
                <img
                  src={FEATURED_ENTERPRISE_PROJECT.image}
                  alt={FEATURED_ENTERPRISE_PROJECT.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B1B]/80 via-transparent to-transparent pointer-events-none" />

                {/* Internal disclaimer label as per prompt instructions */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-[#061B1B]/90 backdrop-blur border border-[#204342] text-[10px] font-mono-meta text-[#A4BBB6] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D4C7]" />
                  <span>Representative Enterprise Dashboard UI (Protected Client IP)</span>
                </div>
              </div>
            </div>

            {/* Details column */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 font-mono-meta text-xs text-[#32D4C7] mb-2 uppercase tracking-wider">
                <Sparkles size={14} />
                <span>{FEATURED_ENTERPRISE_PROJECT.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-[#F2F7F5] leading-tight">
                {FEATURED_ENTERPRISE_PROJECT.title}
              </h3>

              <div className="mt-2 text-xs font-mono-meta text-[#728B86]">
                ORGANIZATION: <span className="text-[#82E8DD] font-semibold">YANOLTECH</span> ·
                ENTERPRISE HRMS
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#A4BBB6] leading-relaxed font-sans">
                {FEATURED_ENTERPRISE_PROJECT.description}
              </p>

              {/* Verified Features */}
              <div className="mt-5 space-y-2">
                <p className="text-xs font-mono-meta uppercase tracking-wider text-[#F2F7F5] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#32D4C7]" />
                  Verified Core Modules:
                </p>
                <ul className="space-y-1.5 text-xs text-[#A4BBB6]">
                  {FEATURED_ENTERPRISE_PROJECT.detailedFeatures?.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#32D4C7] mt-0.5">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {FEATURED_ENTERPRISE_PROJECT.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-mono-meta border border-[#204342] bg-[#103332]/70 text-[#82E8DD]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#204342]/70 flex items-center gap-3">
                <span className="text-xs font-mono-meta text-[#728B86] flex items-center gap-2">
                  <Layers size={13} className="text-[#32D4C7]" />
                  Internal Enterprise Deployment @ YanolTech
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            ADDITIONAL FEATURED PROJECTS (EDITORIAL GRID)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OTHER_PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-[#204342] bg-[#0B2928]/80 backdrop-blur overflow-hidden flex flex-col group hover:border-[#32D4C7]/50 transition-all duration-300"
            >
              {/* Project Image Region */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#061B1B]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2928] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#061B1B]/80 backdrop-blur border border-[#204342] text-[11px] font-mono-meta text-[#82E8DD]">
                  0{idx + 2} / {project.category.split("/")[0].trim()}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-display font-light text-[#F2F7F5] group-hover:text-[#32D4C7] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#A4BBB6] leading-relaxed font-sans flex-1">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-meta border border-[#204342]/70 bg-[#103332]/40 text-[#A4BBB6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-6 pt-5 border-t border-[#204342]/60 flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#204342] hover:border-[#32D4C7]/60 bg-[#103332]/40 hover:bg-[#103332] text-xs font-mono-meta text-[#F2F7F5] transition-all"
                    >
                      <Github size={14} className="text-[#32D4C7]" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#32D4C7] hover:bg-[#82E8DD] text-xs font-semibold text-[#061B1B] transition-all hover:-translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
