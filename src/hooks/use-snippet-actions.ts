import {
  deleteSnippetAction,
  updateSnippetAction,
  UpdateSnippetParams,
} from "@/lib/actions/snippet.actions";
import { useState } from "react";

export const useSnippetActions = () => {
  // states: actionLoading
  const [actionLoading, setActionLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const updateSnippet = async (id: string, options: UpdateSnippetParams) => {
    if (actionLoading) return;
    setActionLoading(true);
    await updateSnippetAction(id, options);
    setActionLoading(false);
  };

  const deleteSnippet = async (id: string) => {
    if (actionLoading) return;
    setActionLoading(true);
    await updateSnippetAction(id, { deleted: true });
    setActionLoading(false);
  };

  const permanentDeleteSnippet = async (id: string) => {
    if (actionLoading) return;
    setActionLoading(true);
    await deleteSnippetAction(id);
    setActionLoading(false);
  };

  const restoreSnippet = async (id: string) => {
    if (actionLoading) return;
    setActionLoading(true);
    await updateSnippetAction(id, { deleted: false });
    setActionLoading(false);
  };

  // function:
  return {
    actionLoading,
    actionError,
    updateSnippet,
    deleteSnippet,
    permanentDeleteSnippet,
    restoreSnippet,
  };
};
