import { useMemo } from 'react';
import { experience } from '../data/profile';
import { useLanguage } from '../i18n/context';
import Reveal from './Reveal';
import Section from './Section';

export default function Experience() {
  const { ui, t, lang } = useLanguage();

  const formatMonth = useMemo(() => {
    // Gregorian calendar and Latin digits in Arabic, to match the rest of the site.
    const formatter = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-ca-gregory-nu-latn' : 'en-US', {
      month: 'short',
      year: 'numeric',
    });
    return (yearMonth: string) => {
      const [year, month] = yearMonth.split('-').map(Number);
      return formatter.format(new Date(year, month - 1, 1));
    };
  }, [lang]);

  return (
    <Section
      id="experience"
      index="03"
      eyebrow={ui.experience.eyebrow}
      title={ui.experience.title}
      subtitle={ui.experience.subtitle}
    >
      <ol className="relative">
        <span
          aria-hidden="true"
          className="absolute bottom-0 start-[5px] top-2 w-px bg-gradient-to-b from-teal-300/60 via-white/10 to-transparent md:start-[199px]"
        />
        {experience.map((job) => {
          const isCurrent = job.kind === 'employment' && job.end === null;
          return (
            <li key={job.id} className="relative pb-10 ps-9 last:pb-0 md:grid md:grid-cols-[200px_1fr] md:ps-0">
              <span
                aria-hidden="true"
                className={`absolute start-0 top-[3px] h-[11px] w-[11px] rounded-full border-2 border-ink-950 md:start-[194px] ${
                  isCurrent ? 'bg-teal-300 shadow-[0_0_0_5px_rgba(94,234,212,0.15)]' : 'bg-slate-600'
                }`}
              />

              <Reveal className="mb-3 md:mb-0 md:pe-10 md:text-end">
                <p className="font-mono text-xs text-teal-300">
                  {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : ui.experience.present}
                </p>
                <p className="mt-1.5 text-sm text-slate-400">{t(job.location)}</p>
              </Reveal>

              <Reveal delay={80} className="md:ps-10">
                <article className="card spotlight p-6 sm:p-7">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{t(job.role)}</h3>
                      <p className="mt-1 text-[15px] text-slate-300">
                        {t(job.company)}
                        {job.kind === 'freelance' && <span className="text-slate-400"> · {ui.experience.projectBased}</span>}
                      </p>
                    </div>
                    {isCurrent && (
                      <span className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-200">
                        {ui.experience.current}
                      </span>
                    )}
                  </header>

                  <ul className="mt-5 space-y-2.5">
                    {t(job.highlights).map((highlight) => (
                      <li key={highlight} className="text-body flex gap-3 text-[15px]">
                        <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-teal-300/80" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <ul aria-label={ui.experience.stack} className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
