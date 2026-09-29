import type { ComponentType } from 'react';
import { ArrowRight, Mail, Server, Smartphone } from 'lucide-react';
import { currentRole, profile } from '../data/profile';
import { useLanguage } from '../i18n/context';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';

export default function Hero() {
  const { ui, t } = useLanguage();
  const name = t(profile.name);
  const splitAt = name.lastIndexOf(' ');

  const socials: { label: string; href: string; icon: ComponentType<{ className?: string }> }[] = [
    { label: 'LinkedIn', href: profile.links.linkedin, icon: LinkedInIcon },
    { label: 'GitHub', href: profile.links.github, icon: GitHubIcon },
    { label: 'WhatsApp', href: profile.links.whatsapp, icon: WhatsAppIcon },
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-36 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-24">
      <Backdrop />

      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          {currentRole && (
            <p className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pe-4 ps-3 text-sm text-slate-300 backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>
                {t(currentRole.role)} {ui.hero.at} <span className="font-medium text-white">{t(currentRole.company)}</span>
              </span>
            </p>
          )}

          <h1 className="hero-title mt-7 animate-fade-up [animation-delay:80ms]">
            {name.slice(0, splitAt)} <span className="text-gradient">{name.slice(splitAt + 1)}</span>
          </h1>

          <p className="mt-5 animate-fade-up font-display text-xl text-slate-200 [animation-delay:160ms] sm:text-2xl">
            {t(profile.role)}
            <span className="mt-1.5 block text-lg text-slate-400 sm:text-xl">{t(profile.focus)}</span>
          </p>

          <p className="text-body mt-6 max-w-xl animate-fade-up text-base [animation-delay:240ms] sm:text-lg">{ui.hero.lead}</p>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:320ms]">
            <a href="#projects" className="btn-primary flex-auto sm:flex-none">
              {ui.hero.primaryCta}
              <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary flex-auto sm:flex-none">
              {ui.hero.secondaryCta}
            </a>
          </div>

          <ul aria-label={ui.hero.social} className="mt-10 flex animate-fade-up items-center gap-3 [animation-delay:400ms]">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="icon-btn"
                  {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <Portrait />
        </div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_20%,transparent_100%)]" />
      <div className="absolute -top-48 start-[-12%] h-[36rem] w-[36rem] animate-drift rounded-full bg-teal-500/[0.16] blur-[120px]" />
      <div className="absolute end-[-18%] top-1/3 h-[34rem] w-[34rem] animate-drift rounded-full bg-indigo-500/[0.16] blur-[120px] [animation-delay:-10s]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}

function Portrait() {
  const { ui } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[380px] animate-fade-up [animation-delay:200ms] sm:max-w-[420px] lg:max-w-[440px]">
      <div className="relative aspect-[4/5]">
        <div
          aria-hidden="true"
          className="absolute inset-x-[7%] bottom-0 top-[12%] rounded-t-full border-x border-t border-white/10 bg-gradient-to-b from-teal-300/[0.16] via-cyan-400/[0.05] to-transparent [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
        />
        <div aria-hidden="true" className="absolute left-1/2 top-[18%] h-[55%] w-[70%] -translate-x-1/2 rounded-full bg-teal-400/20 blur-[80px]" />
        <img
          src="/images/portrait-960.webp"
          srcSet="/images/portrait-640.webp 640w, /images/portrait-960.webp 960w"
          sizes="(min-width: 1024px) 440px, 80vw"
          width={960}
          height={1406}
          alt={ui.hero.portraitAlt}
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,#000_78%,transparent)]"
        />

        <FloatingCard
          icon={Server}
          title={ui.hero.backend}
          detail="NestJS · Node.js"
          className="start-[-4%] top-[34%] sm:start-[-8%]"
        />
        <FloatingCard
          icon={Smartphone}
          title={ui.hero.mobile}
          detail="Kotlin · Flutter"
          className="bottom-[16%] end-[-4%] [animation-delay:-3.5s] sm:end-[-8%]"
        />
      </div>
    </div>
  );
}

interface FloatingCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  className: string;
}

function FloatingCard({ icon: Icon, title, detail, className }: FloatingCardProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 flex animate-float items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/75 px-3.5 py-3 shadow-2xl shadow-black/50 backdrop-blur-md ${className}`}
    >
      <span className="icon-tile h-9 w-9">
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="pe-1">
        <span className="block text-sm font-semibold text-white">{title}</span>
        <span dir="ltr" className="block font-mono text-[11px] text-slate-400">
          {detail}
        </span>
      </span>
    </div>
  );
}
