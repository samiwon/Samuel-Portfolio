import { motion, useScroll, useSpring } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  ArrowUp,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  X,
} from "lucide-react";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import type { IconType } from "react-icons";

import profileImg from "@/assets/samuel-profile.jpg";
import projectMindmate from "@/assets/project-mindmate.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDietapp from "@/assets/project-dietapp2.jpg";
import resumePdf from "@/assets/samuel wondimu cv .pdf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type SkillGroup = { title: string; skills: { name: string; icon: IconType; color: string }[] };

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#ffffff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
    ],
  },
];

const projects = [
  {
    title: "DietApp – Nutrition & Calorie Tracker",
    description:
      "Secure native Android health and nutrition tracking app built in Java using MVC architecture. Users log daily meals, track calories, pick dates via an interactive Date Picker, and manage food logs. Includes an Admin Dashboard with a RecyclerView to monitor user records and manage roles.",
    tech: ["Java", "Android", "MVC", "SQLite", "RecyclerView"],
    image: projectDietapp,
    github: "https://github.com/samiwon/smartdietsystem",
    demo: "https://github.com/samiwon/smartdietsystem",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern responsive developer portfolio built using Next.js and Tailwind CSS showcasing projects, skills, education and contact information.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: projectPortfolio,
    github: "https://github.com/samiwon/Samuel-Portfolio",
    demo: "https://samiwon.github.io/Samuel-Portfolio/",
  },
  {
    title: "MindMate AI – Mental Wellness Chat Assistant",
    description:
      "An AI-powered mental wellness platform that provides emotional support through natural language conversations. Features include AI chat, mood tracking, authentication, and data visualization.",
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Groq API"],
    image: projectMindmate,
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Application Project",
    description:
      "Responsive mobile application demonstrating modern UI design and practical problem solving.",
    tech: ["React Native", "TypeScript", "REST API"],
    image: projectMobile,
    github: "#",
    demo: "#",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#home" className="font-bold tracking-tight text-white">
            <span className="gradient-text">Samuel</span>
            <span className="text-white/70">.dev</span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-transform hover:scale-105 md:inline-block"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 flex flex-col gap-3 rounded-2xl p-5 md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute left-[5%] top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="animate-blob absolute right-[8%] top-40 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            Hello, I'm
          </p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Samuel <span className="gradient-text">Wondimu</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-white/80">
            Computer Science Graduate ·{" "}
            <span className="text-primary">Full-Stack Web Developer</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            Passionate about building modern, scalable, and user-friendly web applications using
            modern technologies. I enjoy solving real-world problems through clean code and
            intuitive user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href={resumePdf}
              download="Samuel_Wondimu_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="animate-float relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 blur-2xl opacity-70" />
            <div className="relative aspect-square h-64 w-64 overflow-hidden rounded-full border-2 border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.5)] sm:h-80 sm:w-80 md:h-96 md:w-96">
              <img
                src={profileImg}
                alt="Samuel Wondimu"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 text-xs text-white/80">
              <p className="font-semibold text-white">Available for work</p>
              <p className="text-white/60">Remote · Ethiopia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8 sm:p-10"
      >
        <p className="text-lg leading-relaxed text-white/80">
          I am a Computer Science graduate with a strong passion for full-stack web development and
          software engineering. I enjoy creating responsive web applications, AI-powered solutions,
          and scalable systems using modern technologies. I am continuously learning and seeking
          opportunities to contribute to innovative software projects.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
          {[
            { k: "3+", v: "Projects" },
            { k: "3.62", v: "CGPA" },
            { k: "2026", v: "Graduating" },
          ].map((s) => (
            <div key={s.v}>
              <p className="gradient-text text-2xl font-black sm:text-3xl">{s.k}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Skills & Tools">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="mb-5 text-lg font-bold text-white">{group.title}</h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {group.skills.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] p-3 text-center transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
                  >
                    <Icon size={28} color={s.color} />
                    <span className="text-xs font-medium text-white/70">{s.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Recent work" title="Featured Projects">
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass group flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl sm:w-[320px]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Academic background" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative flex md:justify-end"
        >
          <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              <GraduationCap size={16} className="text-white" />
            </div>
          </div>
          <div className="glass ml-12 w-full rounded-3xl p-6 md:ml-0 md:w-[calc(50%-2rem)]">
            <p className="text-xs uppercase tracking-widest text-primary">2022 – 2026</p>
            <h3 className="mt-2 text-xl font-bold text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-1 text-white/70">Jimma University</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                CGPA: 3.62 / 4.00
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                Expected 2026
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-8 flex"
        >
          <div className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <GraduationCap size={16} className="text-white" />
            </div>
          </div>
          <div className="glass ml-12 w-full rounded-3xl p-6 md:ml-0 md:w-[calc(50%-2rem)]">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary"> 3 Months</p>
                <h3 className="mt-2 text-xl font-bold text-white">Full-stack Developer Intern</h3>
                <p className="mt-1 text-white/70">Efuye Gela Company</p>
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Internship
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Worked as a full-stack developer for three months, contributing to both frontend and
              backend tasks while collaborating with the team to improve the overall product
              experience.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  const infos = [
    {
      icon: Mail,
      label: "Email",
      value: "Samuelwondimu467@gmail.com",
      href: "mailto:samuel.Samuelwondimu467@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/samiwon",
      href: "https://github.com/samiwon",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/samuelwondimu",
      href: "https://www.linkedin.com/in/samuel-wondimu-7237153aa",
    },
    { icon: MapPin, label: "Location", value: "Ethiopia", href: "#" },
  ];

  return (
    <Section id="contact" eyebrow="Let's collaborate" title="Get In Touch">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 lg:col-span-2"
        >
          <h3 className="text-xl font-bold text-white">Contact Information</h3>
          <p className="mt-2 text-sm text-white/60">
            Have a project in mind or want to say hi? My inbox is always open.
          </p>
          <div className="mt-6 space-y-4">
            {infos.map((i) => {
              const Icon = i.icon;
              return (
                <a
                  key={i.label}
                  href={i.href}
                  target={
                    i.href.startsWith("http") || i.href.startsWith("mailto:") ? "_blank" : undefined
                  }
                  rel={
                    i.href.startsWith("http") || i.href.startsWith("mailto:")
                      ? "noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-white/50">{i.label}</p>
                    <p className="truncate text-sm text-white">{i.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                Name
              </label>
              <Input required name="name" placeholder="Your name" className="h-12 bg-white/5" />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                Email
              </label>
              <Input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 bg-white/5"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs uppercase tracking-widest text-white/60">
              Message
            </label>
            <Textarea
              required
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              className="bg-white/5"
            />
          </div>
          <Button
            type="submit"
            className="mt-6 h-12 w-full gap-2 rounded-full bg-primary text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-transform hover:scale-[1.02]"
          >
            <Send size={16} /> Send Message
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xl font-black text-white">
              Samuel <span className="gradient-text">Wondimu</span>
            </p>
            <p className="mt-1 text-sm text-white/60">
              Building modern web and mobile applications with passion.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/samiwon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-wondimu-7237153aa"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ArrowUp size={14} /> Back To Top
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          Copyright © 2026 Samuel Wondimu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <motion.div
      style={{ scaleX: scale }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400"
    />
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
