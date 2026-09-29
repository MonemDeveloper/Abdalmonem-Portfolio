import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type LanguageContextValue } from './context';
import { ui } from './ui';
import type { Lang, Localized } from './types';

const STORAGE_KEY = 'lang';

// index.html resolves the language (URL or saved preference) before first paint.
const initialLang = (): Lang => (document.documentElement.lang === 'ar' ? 'ar' : 'en');

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = ui[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang].meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this visit only.
    }
  }, [lang, dir]);

  const toggleLanguage = useCallback(() => {
    setLang((current) => (current === 'en' ? 'ar' : 'en'));
    // Drop a ?lang= override so it doesn't win over the new choice on reload.
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang');
      window.history.replaceState(null, '', url);
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      ui: ui[lang],
      t: <T,>(localized: Localized<T>) => localized[lang],
      toggleLanguage,
    }),
    [lang, dir, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
