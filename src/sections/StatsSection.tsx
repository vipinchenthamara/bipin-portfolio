import FadeIn from '../components/FadeIn';
import { stats } from '../data';

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-[#0C0C0C] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.value} delay={i * 0.1} y={20} className="text-center md:text-left">
            <div
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-light uppercase tracking-wider text-[#D7E2EA]/55 sm:text-sm">
              {stat.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
