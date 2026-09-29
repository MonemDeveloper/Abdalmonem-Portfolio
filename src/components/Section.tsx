import type { ReactNode } from 'react';
import Highlight from './Highlight';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, index, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">
            <span className="text-slate-400">{index}</span>
            <span aria-hidden="true" className="h-px w-8 bg-teal-300/40" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="section-title">
            <Highlight text={title} />
          </h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
