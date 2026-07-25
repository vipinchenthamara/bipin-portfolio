interface ContactButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/**
 * Primary pill. Blue "trust" gradient (retuned from the template's magenta) with
 * layered inner shadows and an inset white outline.
 */
export default function ContactButton({
  label = 'Contact Me',
  href = 'mailto:vipin.chenthamara@gmail.com',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`accent-gradient inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        boxShadow:
          '0px 4px 4px rgba(0, 103, 192, 0.25), 4px 4px 12px #0067c0 inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}
