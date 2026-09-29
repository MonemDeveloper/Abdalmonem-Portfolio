import { useEffect, useRef, useState, type ComponentType, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../i18n/context';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import Reveal from './Reveal';
import Section from './Section';

interface Channel {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  ltr?: boolean;
}

export default function Contact() {
  const { ui, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const copyTimer = useRef<number>();

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend: compose the message in the visitor's email app.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? '').trim();

    const subject = field('subject') || `${ui.contact.form.defaultSubject} — ${field('name')}`;
    const body = `${field('message')}\n\n— ${field('name')}\n${field('email')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const channels: Channel[] = [
    { icon: WhatsAppIcon, label: ui.contact.whatsapp, value: profile.phone.display, href: profile.links.whatsapp, ltr: true },
    { icon: LinkedInIcon, label: ui.contact.linkedin, value: ui.contact.viewProfile, href: profile.links.linkedin },
    { icon: GitHubIcon, label: ui.contact.github, value: '@MonemDeveloper', href: profile.links.github, ltr: true },
  ];

  const { form } = ui.contact;

  return (
    <Section id="contact" index="06" eyebrow={ui.contact.eyebrow} title={ui.contact.title} subtitle={ui.contact.subtitle}>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 end-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <Reveal className="min-w-0 space-y-4 lg:col-span-5">
          <div className="card spotlight p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="icon-tile">
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-400">{ui.contact.email}</p>
                <a
                  href={`mailto:${profile.email}`}
                  dir="ltr"
                  className="mt-0.5 block truncate text-[15px] font-medium sm:text-base text-white transition-colors hover:text-teal-200 rtl:text-right"
                >
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={ui.contact.copy}
                title={ui.contact.copy}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-teal-300" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p aria-live="polite" className="sr-only">
              {copied ? ui.contact.copied : ''}
            </p>
          </div>

          {channels.map(({ icon: Icon, label, value, href, ltr }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card spotlight group flex items-center gap-4 p-5 sm:p-6"
            >
              <span className="icon-tile">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-slate-400">{label}</span>
                <span dir={ltr ? 'ltr' : undefined} className="mt-0.5 block truncate text-[15px] font-medium sm:text-base text-white rtl:text-right">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-teal-300 rtl:-scale-x-100"
              />
            </a>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-2 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {ui.contact.basedIn} {t(profile.location)}
            </span>
            <a
              href={`tel:${profile.phone.e164}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {ui.contact.call}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="min-w-0 lg:col-span-7">
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white">{form.title}</h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="field-label">
                  {form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  dir="auto"
                  placeholder={form.namePlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="field-label">
                  {form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  placeholder={form.emailPlaceholder}
                  className="field rtl:text-right"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-subject" className="field-label">
                {form.subject} <span className="font-normal text-slate-400">({form.optional})</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                dir="auto"
                placeholder={form.subjectPlaceholder}
                className="field"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="field-label">
                {form.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                dir="auto"
                placeholder={form.messagePlaceholder}
                className="field resize-y"
              />
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-400">{form.note}</p>
              <button type="submit" className="btn-primary shrink-0">
                <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
                {form.submit}
              </button>
            </div>

            <p aria-live="polite" className={sent ? 'mt-5 rounded-xl border border-teal-300/20 bg-teal-300/[0.06] px-4 py-3 text-sm text-teal-100' : 'sr-only'}>
              {sent && (
                <>
                  {form.sent}{' '}
                  <a href={`mailto:${profile.email}`} dir="ltr" className="font-semibold underline underline-offset-4">
                    {profile.email}
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
