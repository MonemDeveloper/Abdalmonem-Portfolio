import { Languages, MapPin } from 'lucide-react';
import { principles, profile, stats } from '../data/profile';
import { useLanguage } from '../i18n/context';
import Reveal from './Reveal';
import Section from './Section';

export default function About() {
  const { ui, t } = useLanguage();

  const figures = [
    { value: profile.yearsOfExperience, label: ui.about.stats.years },
    { value: String(stats.countries), label: ui.about.stats.countries },
    { value: String(stats.companies), label: ui.about.stats.companies },
  ];

  return (
    <Section id="about" index="01" eyebrow={ui.about.eyebrow} title={ui.about.title}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="text-body space-y-5 text-lg">
            {ui.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {t(profile.location)}
            </li>
            <li className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {ui.about.languages}
            </li>
          </ul>
        </Reveal>

        <div className="space-y-5 lg:col-span-5">
          <Reveal delay={100}>
            <dl className="grid grid-cols-3 gap-3">
              {figures.map(({ value, label }) => (
                <div key={label} className="card flex flex-col-reverse items-center justify-end px-3 py-6 text-center">
                  <dt className="mt-1.5 text-xs leading-snug text-slate-400">{label}</dt>
                  <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-6 sm:p-7">
              <h3 className="font-display text-base font-semibold text-white">{ui.about.principlesTitle}</h3>
              <ul className="mt-6 space-y-6">
                {principles.map(({ icon: Icon, title, description }) => (
                  <li key={title.en} className="flex gap-4">
                    <span className="icon-tile">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-slate-100">{t(title)}</p>
                      <p className="text-body mt-1 text-sm">{t(description)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
