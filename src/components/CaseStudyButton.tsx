import { ArrowUpRight } from 'lucide-react';

interface CaseStudyButtonProps {
  label?: string;
  href?: string;
}

/**
 * Ghost / outline pill used on the case-study cards (template's "Live Project").
 */
export default function CaseStudyButton({
  label = 'Read Case Study',
  href = '#',
}: CaseStudyButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-base"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </a>
  );
}
