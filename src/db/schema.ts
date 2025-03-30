import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const tweets = pgTable("tweets", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export type InsertTweetModel = typeof tweets.$inferInsert;
