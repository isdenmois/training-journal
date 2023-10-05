import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/libsql';
import { desc, eq, sql } from 'drizzle-orm';
import { schema } from './schema';
import { logs } from './schema/logs';

export const client = createClient({ url: env.DATABASE_URL, authToken: env.DATABASE_AUTH_TOKEN });

const db = drizzle(client, { schema });

export const getLogs = () => db.select().from(logs).orderBy(desc(logs.date)).all();

export const getTotal = async (type: string) => {
  const count = await db
    .select({ total: sql<number>`sum(${logs.count})` })
    .from(logs)
    .where(eq(logs.type, type))
    .get();

  return count?.total ?? 0;
};

export const createLog = (type: string, date: Date, count: number) =>
  db.insert(logs).values({
    type,
    date,
    count,
  });
