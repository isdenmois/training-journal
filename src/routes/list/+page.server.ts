import { getLogs } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => ({
  logs: await getLogs(),
})) satisfies PageServerLoad;

export { actions } from '../+page.server';
