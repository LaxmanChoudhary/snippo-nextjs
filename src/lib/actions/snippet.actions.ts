"use server";

import { db } from "@/db/drizzle";
import { SnippetTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const getPublicSnippets = async () => {
  return db
    .select()
    .from(SnippetTable)
    .where(and(eq(SnippetTable.public, true), eq(SnippetTable.deleted, false)));
};

export const getUserSnippets = async (
  userId: string,
  options?: { deleted?: boolean; public?: boolean }
) => {
  return db
    .select()
    .from(SnippetTable)
    .where(
      and(
        eq(SnippetTable.userId, userId),
        options?.deleted !== undefined
          ? eq(SnippetTable.deleted, options.deleted)
          : undefined,
        options?.public !== undefined
          ? eq(SnippetTable.public, options.public)
          : undefined
      )
    );
};

type InsertSnippetParams = {
  // id: string;
  // userId: string | null;
  username: string;
  clerkId: string;
  // user: {
  //     username: string;
  //     clerkId: string;
  // } | null;
  title: string;
  // slug: string | null;
  tags: string;
  description: string;
  codeLanguage: string;
  codeValue: string;
  isPublic: boolean;
  // deleted:
  // createdAt: Date;
  // updatedAt: Date;
};

export type UpdateSnippetParams = {
  // user: {
  //     username: string;
  //     clerkId: string;
  // } | null;
  title?: string;
  tags?: string;
  description?: string;
  codeLanguage?: string;
  codeValue?: string;
  isPublic?: boolean;
  deleted?: boolean;
};

export const inserSnippetAction = async ({
  username,
  clerkId,
  title,
  tags,
  description,
  codeLanguage,
  codeValue,
  isPublic,
}: InsertSnippetParams) => {
  const snipp = {
    userId: clerkId,
    user: {
      username,
      clerkId,
    },
    title,
    tags,
    description,
    codeLanguage,
    codeValue,
    public: isPublic,
  };
  await db.insert(SnippetTable).values(snipp);
  revalidatePath("/")
  revalidatePath("/collection")
  return "";
};

export const getSnippetBySlug = async (slug: string) => {
  return db.select().from(SnippetTable).where(eq(SnippetTable.slug, slug));
};

export const updateSnippetAction = async (
  id: string,
  updatedData: UpdateSnippetParams
) => {
  await db.update(SnippetTable).set(updatedData).where(eq(SnippetTable.id, id));
  revalidatePath("/");
  revalidatePath("/collection");
};

export const deleteSnippetAction = async (id: string) => {
  await db.delete(SnippetTable).where(eq(SnippetTable.id, id))
  revalidatePath("/trash")
  return null
}
