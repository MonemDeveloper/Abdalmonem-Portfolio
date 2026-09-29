import { createContext, useContext } from 'react';
import type { UIStrings } from './ui';
import type { Lang, Localized } from './types';

export interface LanguageContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  /** Interface copy for the active language. */
  ui: UIStrings;
  /** Picks the active-language variant of a localized value. */
  t: <T>(value: Localized<T>) => T;
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
