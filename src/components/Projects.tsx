import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/profile';
import { useLanguage } from '../i18n/context';
import ProjectCover from './ProjectCover';
import Reveal from './Reveal';
import Section from './Section';

export default function Projects() {
  const { ui, t } = useLanguage();

  return (
    <Section id="projects" index="04" eyebrow={ui.projects.eyebrow} title={ui.projects.title} subtitle={ui.projects.subtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 100} className="h-full">
            <article className="card spotlight group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-ink-900">
                <ProjectCover kind={project.art} />
                <span className="chip absolute start-4 top-4 bg-ink-950/70 font-sans backdrop-blur">{t(project.tag)}</span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-white">{t(project.title)}</h3>
                <p className="text-body mt-3 text-[15px]">{t(project.description)}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.links && (
                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
                    {project.links.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
                      >
                        {t(label)}
                        <span className="sr-only"> ({ui.projects.newTab})</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover/link:-translate-x-0.5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
