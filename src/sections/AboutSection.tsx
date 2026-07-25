import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const aboutCopy =
  'I’m a Microsoft Security & Cloud Architect and Engineering Lead with 18 years of hands-on experience — currently leading Microsoft security delivery at vCyberiz, an AI-driven MSSP, for enterprise and government clients across APAC. I design and run identity and security programs end to end, with Zero Trust as the operating model and TOGAF keeping every architecture decision defensible. Let’s build something resilient together.';

/** Soft glowing orb — replaces the template's floating 3D props. */
function Orb({ className, size }: { className: string; size: number }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          'radial-gradient(38% 38% at 35% 30%, rgba(159,216,230,0.95) 0%, rgba(27,165,200,0.5) 26%, rgba(0,103,192,0.22) 56%, rgba(12,12,12,0) 74%)',
      }}
    />
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-10"
    >
      {/* BC monogram, top-left */}
      <FadeIn delay={0.1} x={-40} y={0} duration={0.9} className="absolute left-[5%] top-[8%] z-10">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 text-base font-black tracking-tight text-[#9FD8E6] sm:h-14 sm:w-14 sm:text-lg md:h-16 md:w-16 md:text-xl"
          style={{
            background:
              'radial-gradient(120% 120% at 30% 20%, rgba(27,165,200,0.3) 0%, rgba(0,103,192,0.1) 45%, #121820 100%)',
          }}
        >
          BC
        </div>
      </FadeIn>

      {/* Decorative orbs */}
      <FadeIn delay={0.2} x={60} y={0} duration={1} className="absolute right-[6%] top-[16%]">
        <Orb className="" size={180} />
      </FadeIn>
      <FadeIn delay={0.3} x={-60} y={0} duration={1} className="absolute bottom-[10%] left-[8%]">
        <Orb className="" size={120} />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-14 text-center sm:gap-16 md:gap-20">
        <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading max-w-[13ch] font-black uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
            >
              Architecture that survives reality.
            </h2>
          </FadeIn>

          <AnimatedText
            text={aboutCopy}
            className="max-w-[600px] font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
