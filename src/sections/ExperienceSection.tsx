import FadeIn from '../components/FadeIn';
import { experience } from '../data';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-white px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-12 font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Built over 18 years.
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {experience.map((role, i) => (
          <FadeIn key={role.company + role.period} delay={i * 0.07} y={24}>
            <div
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 sm:py-8"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <div className="flex-1">
                <h3
                  className="font-medium uppercase leading-tight tracking-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.9rem)' }}
                >
                  {role.title}
                </h3>
                <p
                  className="mt-1 font-light text-[#0C0C0C]/55"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                >
                  {role.company} · {role.place}
                </p>
              </div>
              <span
                className="shrink-0 font-light uppercase tracking-wider text-[#0067C0] sm:text-right"
                style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1.05rem)' }}
              >
                {role.period}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
