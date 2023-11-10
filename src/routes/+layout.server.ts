import { locales, defaultLocale, translations, loadTranslations, setLocale } from '$lib/shared/i18n';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies, request }) => {
  let locale = (cookies.get('lang') || '').toLowerCase();

  // Get user preferred locale
  if (!locale) {
    locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
  }
  // Get defined locales
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Use default locale if current locale is not supported
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  await loadTranslations(locale);
  await setLocale(locale);

  return {
    i18n: { locale },
    translations: translations.get(),
  };
}) satisfies LayoutServerLoad;
