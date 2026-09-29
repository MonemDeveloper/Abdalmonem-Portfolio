import { capabilities } from '../data/profile';
import { useLanguage } from '../i18n/context';
import Reveal from './Reveal';
import Section from './Section';

export default function Skills() {
  const { ui, t } = useLanguage();

  return (
    <Section id="skills" index="02" eyebrow={ui.skills.eyebrow} title={ui.skills.title} subtitle={ui.skills.subtitle}>
      <p className="-mt-4 mb-8 flex items-center justify-end gap-2 text-xs text-slate-400 sm:-mt-8">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-300" />
        {ui.skills.core}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, description, stack, core = [] }, index) => (
          <Reveal key={title.en} delay={(index % 3) * 80} className="h-full">
            <article className="card spotlight flex h-full flex-col p-6 sm:p-7">
              <span className="icon-tile h-11 w-11">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{t(title)}</h3>
              <p className="text-body mt-2.5 text-[15px]">{t(description)}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {stack.map((item) => {
                  const label = typeof item === 'string' ? item : t(item);
                  const isCore = typeof item === 'string' && core.includes(item);
                  return (
                    <li key={label} className={isCore ? 'chip chip-core' : 'chip'}>
                      {isCore && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-300" />}
                      {label}
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
