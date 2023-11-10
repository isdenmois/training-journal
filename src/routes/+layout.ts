import 'virtual:uno.css';
import { addTranslations, loadTranslations } from '$lib/shared/i18n';
import type { LayoutLoad } from './$types';

export const load = (async ({ data }) => {
  addTranslations(data.translations);

  await loadTranslations(data.i18n.locale);

  return data.i18n;
}) satisfies LayoutLoad;
