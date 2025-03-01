"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ReadonlyCodeview from "../readonly_codeview";
import { Snippet } from "@/db/schema";
import { useModal } from "@/providers/modal-provider";
import { useUser } from "@clerk/nextjs";
import { useSnippetActions } from "@/hooks/use-snippet-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditSnippetModal } from "../modals/edit-modal";
import { deleteSnippetConfirm } from "../modals/confirm-delete";
import { MoreVertical } from "lucide-react";

export const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const openModal = useModal((state) => state.openModal);
  const closeModal = useModal((state) => state.closeModal);
  const user = useUser();
  const { actionLoading, deleteSnippet, permanentDeleteSnippet, restoreSnippet } = useSnippetActions();

  return (
    <Card className="w-full border-neutral-800 rounded-none">
      <CardHeader className="p-4">
        <CardTitle className="text-md relative">
          <Link href={`/snippet/${snippet.slug}`} className="hover:underline">
            {snippet.title}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="absolute right-0 top-0">
              <button aria-haspopup="true" className="p-2">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-xs" disabled>
                Bookmark
              </DropdownMenuItem>
              {snippet.userId == user.user?.id && (
                <>
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() =>
                      openModal(
                        <EditSnippetModal
                          formValues={{
                            id: snippet.id,
                            title: snippet.title,
                            description: snippet.description,
                            language: snippet.codeLanguage,
                            code: snippet.codeValue,
                            isPublic: snippet.public,
                          }}
                        />
                      )
                    }
                  >
                    Edit
                  </DropdownMenuItem>
                  {snippet.deleted ? (
                    <>
                      <DropdownMenuItem
                        className="text-xs"
                        onClick={() =>
                          openModal(
                            deleteSnippetConfirm({
                              type: "PERMANENT_DELETE",
                              actionLoading: actionLoading,
                              confirmhandler: async () => {
                                await permanentDeleteSnippet(snippet.id);
                                closeModal();
                              },
                              cancelHandler: closeModal,
                            })
                          )
                        }
                      >
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-xs" onClick={() => restoreSnippet(snippet.id)}>
                        Restore
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem
                      className="text-xs"
                      onClick={() =>
                        openModal(
                          deleteSnippetConfirm({
                            type: "DELETE",
                            actionLoading: actionLoading,
                            confirmhandler: async () => {
                              await deleteSnippet(snippet.id);
                              closeModal();
                            },
                            cancelHandler: closeModal,
                          })
                        )
                      }
                    >
                      Trash
                    </DropdownMenuItem>
                  )}
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
        <CardDescription>{snippet.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ReadonlyCodeview className="h-[250px]" code={snippet.codeValue} language={snippet.codeLanguage} copyCode />
      </CardContent>
    </Card>
  );
};
