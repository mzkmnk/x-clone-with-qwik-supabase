import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/** todos */
export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow(),
});
