import React from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";

export const deleteSnippetConfirm = ({
  type,
  actionLoading,
  confirmhandler,
  cancelHandler,
}: {
  type: "DELETE" | "PERMANENT_DELETE";
  actionLoading?: boolean;
  confirmhandler: () => Promise<void>;
  cancelHandler: () => void;
}) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {type === "PERMANENT_DELETE"
            ? "Delete snippet permanently"
            : "Move to trash."}
        </DialogTitle>
        <DialogDescription>
          {type === "PERMANENT_DELETE"
            ? "Hey, hey! you won't be able to restore the snippet. Are you sure?"
            : "Are you sure to move the snippet to trash? You will be able to restore it back though, so chill out."}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button onClick={cancelHandler} variant="ghost">
          No
        </Button>
        <Button
          onClick={confirmhandler}
          variant={"destructive"}
          disabled={actionLoading}
        >
          {actionLoading ? "deleting..." : "Yes"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
