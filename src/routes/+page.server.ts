import { createLog, getTopLogs, getTotal, removeLog, updateLog } from '$lib/server/db';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const [logs, boxingCount, swimmingCount] = await Promise.all([
    getTopLogs(),
    getTotal('BOXING'),
    getTotal('SWIMMING'),
  ]);

  return {
    logs,
    boxingCount,
    swimmingCount,
  };
}) satisfies PageServerLoad;

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const type = data.get('type') as string;
    const date = new Date(data.get('date') as string);
    const count = +(data.get('count') ?? '0');

    await createLog(type, date, count);

    return { success: true };
  },

  edit: async ({ request }) => {
    const data = await request.formData();
    const id = +(data.get('id') ?? '-1');
    const type = data.get('type') as string;
    const date = new Date(data.get('date') as string);
    const count = +(data.get('count') ?? '0');

    await updateLog(id, type, date, count);

    return { success: true };
  },

  remove: async ({ request }) => {
    const data = await request.formData();
    const id = +(data.get('id') ?? '-1');

    await removeLog(id);

    return { success: true };
  },

  locale: async ({ cookies }) => {
    const currentLocale = cookies.get('lang');
    const locale = currentLocale === 'ru' ? 'en' : 'ru';
    const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

    cookies.set('lang', locale, { path: '/', expires: nextYear });

    return { locale };
  },
} satisfies Actions;
