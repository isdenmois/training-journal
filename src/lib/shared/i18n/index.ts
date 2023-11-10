import i18n, { type Config } from 'sveltekit-i18n';
import { en } from './en';
import { ru } from './ru';

export const defaultLocale = 'ru';

export const config = {
  translations: {
    en,
    ru,
  },
} satisfies Config;

export const { t, loading, locales, locale, loadTranslations, setLocale, translations, addTranslations } = new i18n(
  config,
);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
