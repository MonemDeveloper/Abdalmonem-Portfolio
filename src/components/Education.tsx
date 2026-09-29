import { Award, GraduationCap } from 'lucide-react';
import { education } from '../data/profile';
import { useLanguage } from '../i18n/context';
import Reveal from './Reveal';
import Section from './Section';

export default function Education() {
  const { ui, t } = useLanguage();

  return (
    <Section id="education" index="05" eyebrow={ui.education.eyebrow} title={ui.education.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => {
          const Icon = item.type === 'degree' ? GraduationCap : Award;
          return (
            <Reveal key={item.id} delay={index * 100} className="h-full">
              <article className="card spotlight flex h-full gap-5 p-6 sm:p-7">
                <span className="icon-tile h-12 w-12">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-teal-300">
                    {item.type === 'degree' ? ui.education.degree : ui.education.certification}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-white">{t(item.title)}</h3>
                  <p className="mt-1.5 text-[15px] text-slate-300">{t(item.institution)}</p>
                  <p className="mt-3 text-sm text-slate-400">
                    {[item.period, item.note && t(item.note), t(item.location)].filter(Boolean).join(' · ')}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
