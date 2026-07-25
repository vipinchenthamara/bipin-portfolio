import FadeIn from '../components/FadeIn';
import { capabilities } from '../data';

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <FadeIn key={cap.number} delay={i * 0.1} y={30}>
              <div
                className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
                style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
              >
                <span
                  className="font-black leading-none text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {cap.number}
                </span>

                <div className="flex flex-1 flex-col gap-3 pt-1 sm:gap-4 sm:pt-2">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-6 w-6 shrink-0 text-[#0067C0] sm:h-7 sm:w-7"
                      strokeWidth={2}
                    />
                    <h3
                      className="font-medium uppercase leading-tight text-[#0C0C0C]"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {cap.name}
                    </h3>
                  </div>
                  <p
                    className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                      opacity: 0.6,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
