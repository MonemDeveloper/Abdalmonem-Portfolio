import { useEffect, useState } from 'react';
import { Download, Languages, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { useLanguage } from '../i18n/context';
import Logo from './Logo';

const NAV_ITEMS = ['about', 'skills', 'experience', 'projects', 'contact'] as const;
// Every section is observed so the highlight clears over sections without a nav link.
const OBSERVED_SECTIONS = ['top', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const { ui, t, lang, toggleLanguage } = useLanguage();
  const scrolled = useScrolled(16);
  const active = useActiveSection(OBSERVED_SECTIONS);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-white/[0.06] bg-ink-950/75 backdrop-blur-xl' : 'border-transparent'
      }`}
    >
      <nav aria-label={ui.nav.primary} className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-3 rounded-lg">
          <Logo className="h-9 w-9" />
          <span className="hidden font-display text-[15px] font-semibold text-white sm:block">{t(profile.name)}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  active === id ? 'bg-white/[0.07] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {ui.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={ui.nav.switchLabel}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"
          >
            <Languages className="h-4 w-4 text-teal-300" aria-hidden="true" />
            <span lang={lang === 'en' ? 'ar' : 'en'}>{ui.nav.switchTo}</span>
          </button>
          <a href={profile.cv} download className="btn-primary btn-sm hidden md:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            {ui.nav.cv}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.nav.closeMenu : ui.nav.openMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-white/[0.06] md:hidden">
          <ul className="container-page space-y-1 py-4">
            {NAV_ITEMS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                    active === id ? 'bg-white/[0.06] text-white' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page pb-6">
            <a href={profile.cv} download onClick={closeMenu} className="btn-primary w-full">
              <Download className="h-4 w-4" aria-hidden="true" />
              {ui.nav.cv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
