import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import type { TimelineEntry } from "./types";

const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: "2024 – PRESENT",
    title: "Full-Stack Developer",
    organization: "YanolTech",
    badge: "Current Engagement",
    description:
      "Core developer engineering full-stack enterprise solutions and internal platforms. Spearheaded the architecture and implementation of the YanolTech HR Management System, developing responsive React dashboards, role-based security layers, and relational PostgreSQL databases.",
    highlights: [
      "Engineered full-stack HRMS platform managing employee profiles, attendance, and leave workflows.",
      "Designed and integrated RESTful APIs with Node.js and Express.",
      "Optimized query performance and enforced relational integrity in PostgreSQL schemas.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Enterprise Architecture",
    ],
  },
  {
    period: "2022 – 2026",
    title: "Bachelor of Science in Computer Science",
    organization: "Jimma University",
    badge: "Graduating · CGPA 3.62 / 4.00",
    description:
      "Acquired comprehensive theoretical and practical training in computer science. Focused on data structures, algorithmic complexity, distributed systems, database management systems, and software engineering methodologies.",
    highlights: [
      "Maintained an exceptional cumulative GPA of 3.62 / 4.00 across challenging academic terms.",
      "Completed rigorous coursework in algorithms, operating systems, networking, and web systems.",
      "Led academic group software projects employing agile teamwork and modern Git workflows.",
    ],
    tags: ["Algorithms", "Data Structures", "DBMS", "Software Engineering", "Systems Design"],
  },
  {
    period: "3 MONTH INTERNSHIP",
    title: "Full-Stack Developer Intern",
    organization: "Efuye Gela Company",
    badge: "Industry Internship",
    description:
      "Collaborated within cross-functional engineering sprints as a full-stack intern. Implemented responsive user interface components, assisted in backend service maintenance, and actively contributed to code reviews.",
    highlights: [
      "Contributed to frontend and backend tasks across fast-paced production sprint cycles.",
      "Implemented responsive layouts and integrated backend REST endpoints.",
      "Collaborated with senior engineers on debugging, performance audits, and release QA.",
    ],
    tags: ["Full-Stack Development", "API Integration", "Agile Sprints", "Code Reviews"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#32D4C7]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 / TRAJECTORY"
          title="Education and professional"
          titleItalic="milestones."
          description="A verifiable history of academic excellence and real-world software engineering experience."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical subtle timeline line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-[#32D4C7] via-[#204342] to-transparent" />

          <div className="space-y-12">
            {TIMELINE_ENTRIES.map((entry, idx) => (
              <motion.div
                key={entry.title + entry.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Node Marker */}
                <div className="absolute left-4 sm:left-8 top-1.5 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border border-[#32D4C7]/50 bg-[#0B2928] text-[#32D4C7] shadow-[0_0_15px_rgba(50,212,199,0.3)]">
                  {idx === 1 ? <GraduationCap size={15} /> : <Briefcase size={15} />}
                </div>

                {/* Entry Card */}
                <div className="p-6 sm:p-8 rounded-3xl border border-[#204342] bg-[#0B2928]/85 backdrop-blur hover:border-[#32D4C7]/40 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono-meta text-[#32D4C7]">
                      <Calendar size={13} />
                      <span>{entry.period}</span>
                    </div>

                    {entry.badge && (
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-mono-meta border border-[#32D4C7]/30 bg-[#32D4C7]/10 text-[#82E8DD]">
                        {entry.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-light text-[#F2F7F5]">
                    {entry.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#82E8DD]">{entry.organization}</p>

                  <p className="mt-3 text-xs sm:text-sm text-[#A4BBB6] leading-relaxed font-sans">
                    {entry.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {entry.highlights && (
                    <ul className="mt-4 space-y-2 border-t border-[#204342]/70 pt-4 text-xs text-[#A4BBB6]">
                      {entry.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#32D4C7] mt-0.5">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {entry.tags && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono-meta bg-[#103332] border border-[#204342]/80 text-[#728B86]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
