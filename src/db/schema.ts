import { InferSelectModel, SQL, sql } from "drizzle-orm";
import {
  boolean,
  json,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const SnippetTable = pgTable("snippets", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 256 }).notNull(),
  user: json("user_info").$type<{ username: string; clerkId: string }>(),
  title: text("title").notNull(),
  slug: varchar("slug")
    .generatedAlwaysAs(
      (): SQL =>
        sql`lower(regexp_replace(${SnippetTable.title}, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || ${SnippetTable.id}`
    )
    .notNull(),
  tags: text("tags").default("").notNull(), // separated by delimeter ';'
  description: text("description").default("").notNull(),
  codeLanguage: varchar("code_language", { length: 64 }).notNull(),
  codeValue: text("code_value").notNull(),
  public: boolean("public").default(false).notNull(),
  deleted: boolean("deleted").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 })
    .notNull()
    .$onUpdate(() => new Date()),
});

export const BookmarkTable = pgTable("bookmarks", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 256 }),
  snippet: uuid("snippet_id").references(() => SnippetTable.id),
});

export type Bookmark = InferSelectModel<typeof BookmarkTable>;
export type Snippet = InferSelectModel<typeof SnippetTable>;
