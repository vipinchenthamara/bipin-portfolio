import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { caseStudies, type CaseStudy } from '../data';

function hexToRgba(hex: string, a: number) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/** Concentric-ring "radar" with the metric in the centre and an orbiting dot. */
function RadarViz({
  metric,
  metricLabel,
  accent,
}: {
  metric: string;
  metricLabel: string;
  accent: string;
}) {
  return (
    <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px]">
      {/* atmospheric glow */}
      <div
        className="absolute inset-[4%] rounded-full"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(accent, 0.32)} 0%, ${hexToRgba(accent, 0.06)} 46%, transparent 70%)`,
        }}
      />
      {/* rings */}
      <div className="absolute inset-0 rounded-full border" style={{ borderColor: hexToRgba(accent, 0.35) }} />
      <div
        className="absolute inset-[15%] rounded-full border border-dashed"
        style={{ borderColor: hexToRgba(accent, 0.34) }}
      />
      <div className="absolute inset-[30%] rounded-full border" style={{ borderColor: hexToRgba(accent, 0.16) }} />
      {/* orbiting dot rides the dashed ring */}
      <div className="absolute inset-[15%] animate-[spin_9s_linear_infinite]">
        <div
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
          style={{ background: accent, boxShadow: `0 0 14px ${accent}` }}
        />
      </div>
      {/* centre metric */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          className="font-black leading-none tracking-tight text-white"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
        >
          {metric}
        </div>
        <div
          className="mt-3 text-[0.6rem] font-medium uppercase tracking-[0.25em] sm:text-xs"
          style={{ color: accent }}
        >
          {metricLabel}
        </div>
      </div>
    </div>
  );
}

function Card({
  study,
  index,
  total,
  progress,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const { accent } = study;

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-28">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative flex w-full max-w-[1500px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#0C0C0C] p-6 sm:rounded-[44px] sm:p-8 md:rounded-[56px] md:p-12"
      >
        {/* accent wash behind the radar */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-2/3"
          style={{ background: `radial-gradient(60% 80% at 85% 42%, ${hexToRgba(accent, 0.1)} 0%, transparent 60%)` }}
        />

        {/* top bar */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className="font-black leading-none text-[#EAF2F7]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)' }}
            >
              {study.number}
            </span>
            <span
              className="text-[0.7rem] font-medium uppercase tracking-[0.2em] sm:text-sm"
              style={{ color: accent }}
            >
              {study.category}
            </span>
          </div>
          <span className="hidden text-[0.65rem] font-light uppercase tracking-[0.25em] text-white/40 sm:block">
            Confidential / Anonymized
          </span>
        </div>
        <div className="relative mt-4 border-t" style={{ borderColor: hexToRgba(accent, 0.25) }} />

        {/* content */}
        <div className="relative flex flex-1 flex-col items-center gap-8 pt-8 lg:flex-row lg:gap-6 lg:pt-0">
          <div className="flex w-full flex-col justify-center lg:w-1/2 lg:pr-6">
            <h3
              className="font-black uppercase leading-[0.92] tracking-tight text-[#EAF2F7]"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 4.4rem)' }}
            >
              {study.name}
            </h3>
            <p
              className="mt-6 max-w-md font-light leading-relaxed text-[#D7E2EA]/70"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.15rem)' }}
            >
              {study.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-4 py-1.5 text-[0.6rem] font-medium uppercase tracking-widest text-[#D7E2EA]/70 sm:text-xs"
                  style={{ borderColor: hexToRgba(accent, 0.4) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full items-center justify-center lg:w-1/2">
            <RadarViz metric={study.metric} metricLabel={study.metricLabel} accent={accent} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 md:-mt-14 md:rounded-t-[60px] md:px-8"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-8 text-center font-black uppercase leading-none tracking-tight sm:mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Case Studies
        </h2>
      </FadeIn>

      <div ref={container} className="mx-auto max-w-[1500px]">
        {caseStudies.map((study, i) => (
          <Card
            key={study.number}
            study={study}
            index={i}
            total={caseStudies.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
