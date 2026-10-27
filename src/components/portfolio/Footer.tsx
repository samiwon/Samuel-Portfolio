import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import resumePdf from "@/assets/samuel wondimu cv .pdf";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#204342] bg-[#061B1B] py-14 sm:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Identity & Bio */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#32D4C7] shadow-[0_0_10px_#32D4C7]" />
              <p className="text-xl font-display font-light text-[#F2F7F5] tracking-tight">
                Samuel <span className="italic font-normal text-[#82E8DD]">Wondimu</span>
              </p>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#728B86] font-mono-meta">
              Full-Stack Developer · YanolTech · Jimma University
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/samiwon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-[#204342] bg-[#0B2928] hover:bg-[#103332] hover:border-[#32D4C7] text-[#A4BBB6] hover:text-[#32D4C7] transition-all flex items-center justify-center"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-wondimu-7237153aa"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-[#204342] bg-[#0B2928] hover:bg-[#103332] hover:border-[#32D4C7] text-[#A4BBB6] hover:text-[#32D4C7] transition-all flex items-center justify-center"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="mailto:Samuelwondimu467@gmail.com"
              aria-label="Send Email"
              className="w-10 h-10 rounded-full border border-[#204342] bg-[#0B2928] hover:bg-[#103332] hover:border-[#32D4C7] text-[#A4BBB6] hover:text-[#32D4C7] transition-all flex items-center justify-center"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#204342] hover:border-[#32D4C7]/60 bg-[#0B2928] hover:bg-[#103332] text-xs font-mono-meta text-[#F2F7F5] transition-all cursor-pointer ml-2"
            >
              <ArrowUp size={13} className="text-[#32D4C7]" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Copyright & Stack credits */}
        <div className="mt-12 pt-8 border-t border-[#204342]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-meta text-[#728B86]">
          <p>© 2026 Samuel Wondimu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={resumePdf}
              download="Samuel_Wondimu_CV.pdf"
              className="hover:text-[#32D4C7] transition-colors"
            >
              Download CV
            </a>
            <span>•</span>
            <span>Architected with React, TanStack Start & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
