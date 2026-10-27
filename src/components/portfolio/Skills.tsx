import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { SkillCategory } from "./types";

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Component architecture, responsive state management, and type-safe interfaces.",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F2F7F5" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5 & Semantic UI", icon: SiHtml5, color: "#E34F26" },
      { name: "Modern CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "Backend & System APIs",
    description: "RESTful services, server-side business logic, authentication, and middlewares.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#F2F7F5" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "RESTful API Design", icon: SiVite, color: "#32D4C7" },
    ],
  },
  {
    title: "Databases & ORM",
    description: "Relational modeling, document stores, query optimization, and schema migrations.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#F2F7F5" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Version control, build pipelines, development environments, and API debugging.",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#F2F7F5" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Vite Bundler", icon: SiVite, color: "#646CFF" },
      { name: "Postman API Client", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-[#081F1F]/50">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#32D4C7]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / TECHNICAL EXPERTISE"
          title="A verified, full-stack"
          titleItalic="engineering toolkit."
          description="Technologies, frameworks, and database architectures utilized across real-world enterprise and academic projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-3xl border border-[#204342] bg-[#0B2928]/80 backdrop-blur hover:border-[#32D4C7]/40 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono-meta text-[11px] text-[#32D4C7] tracking-widest uppercase">
                    0{idx + 1} / STACK
                  </span>
                  <h3 className="mt-1 text-xl sm:text-2xl font-display font-light text-[#F2F7F5] group-hover:text-[#82E8DD] transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#728B86] font-sans mb-6">
                {category.description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#204342]/70 bg-[#103332]/50 hover:bg-[#103332] hover:border-[#32D4C7]/50 transition-all duration-200 group/item cursor-default"
                    >
                      <div className="p-1 rounded-md bg-[#061B1B]/80 shrink-0 text-[#A4BBB6] group-hover/item:text-[#32D4C7] transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-mono-meta text-[#A4BBB6] group-hover/item:text-[#F2F7F5] truncate transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
