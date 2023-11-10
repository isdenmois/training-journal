import { sqliteTable, integer, text, index } from 'drizzle-orm/sqlite-core';

export const logs = sqliteTable(
  'logs',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    type: text('type').notNull(),
    date: integer('date', { mode: 'timestamp_ms' }).notNull(),
    count: integer('count').notNull(),
  },
  (logs) => ({
    dateIdx: index('date_idx').on(logs.date),
    countIdx: index('count_idx').on(logs.type, logs.count),
  }),
);

export type Log = typeof logs.$inferSelect;
