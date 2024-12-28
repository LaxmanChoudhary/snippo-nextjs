// "use client";
// import { SnippetCard } from "@/components/snippet/snippet";
import { type Snippet } from "@/db/schema";
import React from "react";
import CodeView from "@/components/snippet/code-view";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { DeleteIcon, EditIcon, RecycleIcon, TrashIcon } from "lucide-react";
// import { useUser } from "@clerk/nextjs";
// import { useModal } from "@/providers/modal-provider";
// import { deleteSnippetConfirm } from "@/components/modals/confirm-delete";
// import { useSnippetActions } from "@/hooks/use-snippet-actions";
// import { EditSnippetModal } from "@/components/modals/edit-modal";
// import SnippetActionsMenu from "@/components/snippet/snippet-action-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { MoreVertical } from "lucide-react";
import { getSnippets } from "@/lib/actions/snippet.actions";
// import { currentUser } from "@clerk/nextjs/server";

export const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  // const openModal = useModal((state) => state.openModal);
  // const closeModal = useModal((state) => state.closeModal);
  // const user = useUser();
  // const { actionLoading, deleteSnippet, permanentDeleteSnippet, restoreSnippet } = useSnippetActions();

  return (
    <div className="relative flex border shadow-sm rounded justify-self-center w-full flex-col p-2">
      <div>
        <Link href={`/snippet/${snippet.slug}`} className="hover:underline">
          {snippet.title}
        </Link>
        <p className="text-muted-foreground text-xs">{snippet.description}</p>
      </div>
      {snippet.tags !== "" && (
        <ul className="flex gap-2 py-1">
          {snippet.tags?.split(";").map((tag) => (
            <li className="text-sm px-2 border rounded" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
      <CodeView code={snippet.codeValue} language={snippet.codeLanguage} copyCode editorClassName="!text-xs" />
    </div>
  );
};

export default async function SnippetContainer({
  inTrash = false,
  inPublic,
  userId,
}: {
  inTrash?: boolean;
  inPublic?: boolean;
  userId?: string;
}) {
  // const user = await currentUser();

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
    <div className="grid justify-center gap-4 lg:grid-cols-2">
      {snippets.map((snip) => (
        <SnippetCard key={snip.id} snippet={snip as any} />
      ))}
    </div>
  );
}
