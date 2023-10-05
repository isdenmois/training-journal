import { redirect, type Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
  const authed = event.cookies.get('auth-user') && env.AUTH_USER;

  if (event.route.id !== '/login' && !authed) {
    throw redirect(302, '/login');
  }

  return await resolve(event);
};
