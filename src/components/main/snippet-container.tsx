import React from "react";
import { getSnippets } from "@/lib/actions/snippet.actions";
import { SnippetCard } from "./snippet-card";

export default async function SnippetContainer({
  inTrash = false,
  inPublic,
  userId,
}: {
  inTrash?: boolean;
  inPublic?: boolean;
  userId?: string;
}) {
  const snippets = await getSnippets({
    query: "",
    ...(userId && { forUser: userId }),
    ...(inPublic && { isPublic: inPublic }),
    isDeleted: inTrash,
  });

  if (snippets.length === 0) {
    return (
      <div>
        <p>No snippets available</p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
      {snippets.map((snip) => (
        <SnippetCard key={snip.id} snippet={snip as any} />
      ))}
    </div>
  );
}
