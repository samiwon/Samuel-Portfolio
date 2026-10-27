import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Compass, Code2, Rocket, ArrowRight } from "lucide-react";
import type { ProcessStage } from "./types";

const STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Discovery & Architecture",
    summary: "Deconstructing complexity into concrete specifications.",
    description:
      "Understand the core business problem, identify user requirements, architect database schemas and API boundaries, and plan milestones for an efficient engineering lifecycle.",
    deliverables: [
      "Requirements & User Stories",
      "System Architecture & Data Models",
      "UI/UX Wireframes & Component Specs",
    ],
  },
  {
    number: "02",
    title: "Engineering & Logic",
    summary: "Building robust frontend and backend foundations.",
    description:
      "Implement accessible and responsive interfaces, engineer secure backend services, connect database stores, and write testable, maintainable application logic.",
    deliverables: [
      "Type-Safe Component Hierarchy",
      "RESTful API & Middleware Services",
      "Database Migrations & Relational Logic",
    ],
  },
  {
    number: "03",
    title: "Validation & Launch",
    summary: "Optimizing for security, speed, and real-world scale.",
    description:
      "Conduct thorough cross-browser QA, optimize asset delivery and rendering performance, perform accessibility audits, and prepare the system for resilient production deployment.",
    deliverables: [
      "Performance & SEO Optimization",
      "Accessibility & Cross-Device QA",
      "Automated CI/CD & Production Build",
    ],
  },
];

export function WorkProcedure() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden bg-[#081F1F]/40">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-[480px] h-[480px] rounded-full bg-[#103332]/40 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / WORK PROCEDURE"
          title="From first idea to"
          titleItalic="final product."
          description="A systematic, end-to-end development methodology ensuring every software system is technically resilient and purpose-built."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STAGES.map((stage, idx) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 sm:p-8 rounded-3xl border border-[#204342] bg-[#0B2928]/90 backdrop-blur hover:border-[#32D4C7]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Large Watermark Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl sm:text-6xl font-display font-light text-[#204342] group-hover:text-[#32D4C7]/30 transition-colors select-none">
                  {stage.number}
                </span>

                <div className="p-3 rounded-2xl border border-[#204342] bg-[#103332] text-[#32D4C7] group-hover:scale-105 transition-transform">
                  {idx === 0 && <Compass size={20} />}
                  {idx === 1 && <Code2 size={20} />}
                  {idx === 2 && <Rocket size={20} />}
                </div>
              </div>

              {/* Stage Content */}
              <div>
                <span className="font-mono-meta text-[11px] text-[#32D4C7] tracking-widest uppercase">
                  STAGE {stage.number}
                </span>
                <h3 className="mt-1 text-2xl font-display font-light text-[#F2F7F5] group-hover:text-[#82E8DD] transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-2 text-xs font-mono-meta text-[#728B86]">{stage.summary}</p>

                <p className="mt-4 text-xs sm:text-sm text-[#A4BBB6] leading-relaxed font-sans">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-8 pt-6 border-t border-[#204342]/70 space-y-2">
                <p className="text-[11px] font-mono-meta uppercase tracking-wider text-[#728B86]">
                  Key Deliverables:
                </p>
                {stage.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#A4BBB6]">
                    <ArrowRight size={12} className="text-[#32D4C7] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
