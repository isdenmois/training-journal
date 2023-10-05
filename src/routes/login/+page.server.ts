import { env } from '$env/dynamic/private';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    if (data.get('login') === env.AUTH_USER) {
      cookies.set('auth-user', env.AUTH_USER);

      throw redirect(302, '/');
    }

    return fail(403, { message: 'Error' });
  },
};
