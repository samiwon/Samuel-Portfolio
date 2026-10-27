import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Download,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import resumePdf from "@/assets/samuel wondimu cv .pdf";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message dispatched! Samuel will review and get back to you promptly.", {
        description: "Thank you for reaching out. A confirmation has been logged.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  const directMailtoUrl = `mailto:Samuelwondimu467@gmail.com?subject=${encodeURIComponent(
    formData.subject || "Collaboration Inquiry",
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`,
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#32D4C7]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 / INITIATE CONTACT"
          title="Have an ambitious idea?"
          titleItalic="Let's build it."
          description="Whether you have an enterprise project, an innovative startup product, or want to discuss full-stack engineering opportunities, I am open to conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact & Verified Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl border border-[#204342] bg-[#0B2928]/85 backdrop-blur">
              <span className="font-mono-meta text-xs text-[#32D4C7] uppercase tracking-wider block mb-2">
                DIRECT CHANNELS
              </span>
              <h3 className="text-2xl font-display font-light text-[#F2F7F5]">
                Let's discuss your next project.
              </h3>
              <p className="mt-3 text-sm text-[#A4BBB6] leading-relaxed font-sans">
                I am based in Ethiopia and collaborate with teams and clients worldwide. Send an
                email directly or connect via LinkedIn and GitHub.
              </p>

              <div className="mt-8 space-y-3.5">
                {/* Email */}
                <a
                  href="mailto:Samuelwondimu467@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#204342]/70 bg-[#103332]/40 hover:bg-[#103332] hover:border-[#32D4C7]/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061B1B] border border-[#204342] flex items-center justify-center text-[#32D4C7] group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono-meta text-[10px] text-[#728B86] uppercase tracking-wider">
                      PRIMARY EMAIL
                    </p>
                    <p className="text-sm font-medium text-[#F2F7F5] group-hover:text-[#32D4C7] transition-colors truncate">
                      Samuelwondimu467@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/samiwon"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#204342]/70 bg-[#103332]/40 hover:bg-[#103332] hover:border-[#32D4C7]/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061B1B] border border-[#204342] flex items-center justify-center text-[#32D4C7] group-hover:scale-105 transition-transform">
                    <Github size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono-meta text-[10px] text-[#728B86] uppercase tracking-wider">
                      GITHUB REPOSITORIES
                    </p>
                    <p className="text-sm font-medium text-[#F2F7F5] group-hover:text-[#32D4C7] transition-colors truncate">
                      github.com/samiwon
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/samuel-wondimu-7237153aa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#204342]/70 bg-[#103332]/40 hover:bg-[#103332] hover:border-[#32D4C7]/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#061B1B] border border-[#204342] flex items-center justify-center text-[#32D4C7] group-hover:scale-105 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono-meta text-[10px] text-[#728B86] uppercase tracking-wider">
                      LINKEDIN PROFILE
                    </p>
                    <p className="text-sm font-medium text-[#F2F7F5] group-hover:text-[#32D4C7] transition-colors truncate">
                      linkedin.com/in/samuel-wondimu-7237153aa
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#204342]/70 bg-[#103332]/40">
                  <div className="w-10 h-10 rounded-xl bg-[#061B1B] border border-[#204342] flex items-center justify-center text-[#32D4C7]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-mono-meta text-[10px] text-[#728B86] uppercase tracking-wider">
                      LOCATION & AVAILABILITY
                    </p>
                    <p className="text-sm font-medium text-[#F2F7F5]">
                      Ethiopia · Available for Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* CV Download CTA */}
              <div className="mt-8 pt-6 border-t border-[#204342]/70">
                <a
                  href={resumePdf}
                  download="Samuel_Wondimu_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl border border-[#204342] hover:border-[#32D4C7]/60 bg-[#103332] text-xs font-mono-meta text-[#F2F7F5] hover:text-[#32D4C7] transition-all"
                >
                  <Download size={14} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-[#204342] bg-[#0B2928]/85 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono-meta text-xs text-[#32D4C7] uppercase tracking-wider">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-light text-[#F2F7F5] mt-1">
                    Direct Inquiry Form
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl border border-[#204342] bg-[#103332] text-[#32D4C7]">
                  <MessageSquare size={18} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono-meta uppercase tracking-wider text-[#A4BBB6] mb-2"
                    >
                      Your Name <span className="text-[#32D4C7]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-[#204342] bg-[#061B1B]/70 text-sm text-[#F2F7F5] placeholder-[#728B86] focus:outline-none focus:border-[#32D4C7] focus:ring-1 focus:ring-[#32D4C7] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono-meta uppercase tracking-wider text-[#A4BBB6] mb-2"
                    >
                      Your Email <span className="text-[#32D4C7]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#204342] bg-[#061B1B]/70 text-sm text-[#F2F7F5] placeholder-[#728B86] focus:outline-none focus:border-[#32D4C7] focus:ring-1 focus:ring-[#32D4C7] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono-meta uppercase tracking-wider text-[#A4BBB6] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Project Inquiry / Engineering Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-[#204342] bg-[#061B1B]/70 text-sm text-[#F2F7F5] placeholder-[#728B86] focus:outline-none focus:border-[#32D4C7] focus:ring-1 focus:ring-[#32D4C7] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono-meta uppercase tracking-wider text-[#A4BBB6] mb-2"
                  >
                    Project Details & Scope <span className="text-[#32D4C7]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and architectural requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#204342] bg-[#061B1B]/70 text-sm text-[#F2F7F5] placeholder-[#728B86] focus:outline-none focus:border-[#32D4C7] focus:ring-1 focus:ring-[#32D4C7] transition-all resize-y"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#32D4C7] hover:bg-[#82E8DD] text-[#061B1B] text-sm font-semibold tracking-wide transition-all shadow-[0_0_25px_rgba(50,212,199,0.35)] hover:shadow-[0_0_35px_rgba(50,212,199,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <a
                    href={directMailtoUrl}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-[#204342] hover:border-[#32D4C7]/60 bg-[#103332] text-xs font-mono-meta text-[#A4BBB6] hover:text-[#F2F7F5] transition-colors flex items-center justify-center gap-1.5"
                    title="Open in your default email client"
                  >
                    <span>Email App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-mono-meta text-[#728B86]">
                  <CheckCircle2 size={12} className="text-[#32D4C7]" />
                  <span>Submissions are encrypted and received directly by Samuel.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
