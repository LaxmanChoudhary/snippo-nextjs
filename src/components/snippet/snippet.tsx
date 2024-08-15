"use client";
import { type Snippet } from "@/db/schema";
import React from "react";
import CodeView from "./code-view";
import Link from "next/link";
import { Button } from "../ui/button";
import { DeleteIcon, EditIcon, RecycleIcon, TrashIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useModal } from "@/providers/modal-provider";
import { deleteSnippetConfirm } from "../modals/confirm-delete";
import { useSnippetActions } from "@/hooks/use-snippet-actions";
import { EditSnippetModal } from "../modals/edit-modal";
import SnippetActionsMenu from "./snippet-action-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const SnippetCard = ({ snippet }: { snippet: Snippet }) => {
  const openModal = useModal((state) => state.openModal);
  const closeModal = useModal((state) => state.closeModal);
  const user = useUser();
  const {
    actionLoading,
    deleteSnippet,
    permanentDeleteSnippet,
    restoreSnippet,
  } = useSnippetActions();

  return (
    <div className="relative flex border shadow-sm rounded min-w-[400px] max-w-[900px] min-h-[200px] max-h-[300px] justify-self-center w-full">
      <div className="flex flex-col w-full p-2">
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
        <CodeView
          code={snippet.codeValue}
          language={snippet.codeLanguage}
          copyCode
          editorClassName="!text-xs"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="absolute right-0 top-0">
          <button aria-haspopup="true" className="p-2">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="text-xs" disabled>Bookmark</DropdownMenuItem>
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
                  <DropdownMenuItem
                    className="text-xs"
                    onClick={() => restoreSnippet(snippet.id)}
                  >
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

      {/* {snippet.userId == user.user?.id && (
        <div className="h-full w-8 border-l">
          <Button
            className="rounded-none h-8 w-8"
            variant={"ghost"}
            size={"icon"}
            title="edit"
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
            <EditIcon size={16} />
          </Button>
          {snippet.deleted ? (
            <>
              <Button
                className="rounded-none h-8 w-8"
                variant={"default"}
                size={"icon"}
                onClick={() => restoreSnippet(snippet.id)}
                title="restore"
                disabled={actionLoading}
              >
                <RecycleIcon size={16} />
              </Button>
              <Button
                className="rounded-none h-8 w-8"
                variant={"destructive"}
                size={"icon"}
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
                title="permanently delete"
                disabled={actionLoading}
              >
                <DeleteIcon size={16} />
              </Button>
            </>
          ) : (
            <Button
              className="rounded-none h-8 w-8"
              variant={"destructive"}
              size={"icon"}
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
              title="delete"
            >
              <TrashIcon size={16} />
            </Button>
          )}
        </div>
      )} */}
    </div>
  );
};

const SnippetsContainer = ({ data }: { data: Snippet[] }) => {
  return (
    <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
      {data.map((snip) => (
        <SnippetCard key={snip.id} snippet={snip} />
      ))}
    </div>
  );
};

export default SnippetsContainer;
