// "use client";
// import { SnippetCard } from "@/components/snippet/snippet";
import { type Snippet } from "@/db/schema";
import React from "react";
import CodeView from "@/components/snippet/code-view";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
import { getPublicSnippets, getSnippets } from "@/lib/actions/snippet.actions";
import ReadonlyCodeview from "../readonly_codeview";
// import { currentUser } from "@clerk/nextjs/server";

export const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  // const openModal = useModal((state) => state.openModal);
  // const closeModal = useModal((state) => state.closeModal);
  // const user = useUser();
  // const { actionLoading, deleteSnippet, permanentDeleteSnippet, restoreSnippet } = useSnippetActions();

  return (
    <Card className="w-full border-neutral-800 rounded-none">
      <CardHeader className="p-4">
        <CardTitle className="text-md">
          <Link href={`/snippet/${snippet.slug}`} className="hover:underline">
            {snippet.title}
          </Link>
        </CardTitle>
        <CardDescription>{snippet.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ReadonlyCodeview className="h-[250px]" code={snippet.codeValue} language={snippet.codeLanguage} copyCode />
      </CardContent>
    </Card>
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
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
      {snippets.map((snip) => (
        <SnippetCard key={snip.id} snippet={snip as any} />
      ))}
    </div>
  );
}
