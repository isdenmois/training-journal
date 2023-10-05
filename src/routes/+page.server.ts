import { createLog, getLogs, getTotal } from '$lib/server/db';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const [logs, boxingCount, swimmingCount] = await Promise.all([getLogs(), getTotal('BOXING'), getTotal('SWIMMING')]);

  return {
    logs,
    boxingCount,
    swimmingCount,
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const type = data.get('type') as string;
    const date = new Date(data.get('date') as string);
    const count = +(data.get('count') ?? '0');

    await createLog(type, date, count);

    return { success: true };
  },
} satisfies Actions;
