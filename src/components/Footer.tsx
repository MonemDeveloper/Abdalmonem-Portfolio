import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../i18n/context';
import Logo from './Logo';

export default function Footer() {
  const { ui, t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-page flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t(profile.name)}. {ui.footer.rights}
          </p>
        </div>
        <a href="#top" className="btn-secondary btn-sm">
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
          {ui.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
