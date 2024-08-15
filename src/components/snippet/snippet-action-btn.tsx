"use client";
import { EditIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const DeleteButton = ({
  actionHandler,
  className,
  iconSize = 16,
}: {
  actionHandler: () => Promise<void>;
  className?: string;
  iconSize?: number;
}) => {
  return (
    <Button
      className={cn("rounded-none h-8 w-8", className)}
      variant={"destructive"}
      size={"icon"}
      onClick={async () => {
        await actionHandler();
      }}
    >
      <TrashIcon size={iconSize} />
    </Button>
  );
};

export const EditButton = ({
  actionHandler,
  className,
  iconSize = 16,
}: {
  actionHandler: () => Promise<void>;
  className?: string;
  iconSize?: number;
}) => {
  return (
    <Button
      className={cn("rounded-none h-8 w-8", className)}
      variant={"ghost"}
      size={"icon"}
      onClick={async () => {
        await actionHandler();
      }}
    >
      <EditIcon size={iconSize} />
    </Button>
  );
};
