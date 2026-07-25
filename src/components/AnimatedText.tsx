import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Character-by-character scroll reveal. Each glyph brightens from 0.2 → 1 as the
 * paragraph travels through the viewport (offset start 0.8 → end 0.2).
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return <Char key={i} char={char} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
}

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const display = char === ' ' ? ' ' : char;

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder holds the layout space */}
      <span style={{ opacity: 0 }}>{display}</span>
      {/* animated glyph sits on top */}
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {display}
      </motion.span>
    </span>
  );
}
