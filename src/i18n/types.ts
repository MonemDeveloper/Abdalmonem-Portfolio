export type Lang = 'en' | 'ar';

/** A value provided in every supported language. */
export type Localized<T = string> = Record<Lang, T>;
