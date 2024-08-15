import React from "react";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import SnippetForm from "../snippet/snippet-form";

export const EditSnippetModal = ({
  formValues: { id, ...restItems },
}: {
  formValues: any;
}) => {
  return (
    <DialogContent className="flex flex-col h-[500px] w-[500px] justify-between">
      <DialogTitle className="hidden">Edit Snippet</DialogTitle>
      <DialogDescription className="hidden">Update snippet details</DialogDescription>
      <SnippetForm
        id={id}
        editForm={true}
        formValues={restItems}
        formSavehandler={async () => {}}
      />
    </DialogContent>
  );
};
