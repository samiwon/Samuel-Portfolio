import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  titleItalic,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 md:mb-20 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[#204342] bg-[#0B2928]/80 text-[#32D4C7] font-mono-meta text-xs tracking-widest uppercase ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#32D4C7] animate-pulse" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-[#F2F7F5] tracking-tight leading-[1.08]">
        {title}{" "}
        {titleItalic && (
          <span className="italic font-normal text-[#82E8DD] underline decoration-[#32D4C7]/30 decoration-1 underline-offset-8">
            {titleItalic}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 text-base sm:text-lg text-[#A4BBB6] leading-relaxed font-sans max-w-2xl font-normal">
          {description}
        </p>
      )}

      <div
        className={`mt-6 h-px w-20 bg-gradient-to-r from-[#32D4C7] to-transparent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
