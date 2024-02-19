export const i18n = {
  defaultLocale: 'en-us',
  locales: ['en-us', 'es-es', 'fr-fr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
