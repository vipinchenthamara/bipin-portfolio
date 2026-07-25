import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 pb-16 pt-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-28 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-36"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(27,165,200,0.35) 0%, rgba(0,103,192,0.12) 40%, rgba(12,12,12,0) 70%)',
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:gap-12">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
          >
            Let&apos;s secure what comes next.
          </h2>
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.15}
          y={20}
          className="max-w-xl font-light text-[#D7E2EA]/70"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
        >
          Architecture reviews, security programs, or an engineering lead who can carry
          the design through delivery — let&apos;s talk.
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton />
          <a
            href="https://www.linkedin.com/in/bipinchenthamara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-sm"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </FadeIn>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-5xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-[#D7E2EA]/50 sm:flex-row">
        <span>© 2026 Bipin Chenthamara — Bengaluru, India</span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a href="mailto:vipin.chenthamara@gmail.com" className="transition-colors hover:text-[#D7E2EA]">
            vipin.chenthamara@gmail.com
          </a>
          <a
            href="https://www.bipinchenthamara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#D7E2EA]"
          >
            bipinchenthamara.com
          </a>
        </div>
      </div>
    </section>
  );
}
