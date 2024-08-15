import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const SnippetActionsMenu = ({
  id,
  triggerClassName,
}: {
  id: string;
  triggerClassName?: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("", triggerClassName)}>
        <button aria-haspopup="true" className="p-2">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="text-xs">Bookmark</DropdownMenuItem>
        <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
        <DropdownMenuItem className="text-xs">Delete</DropdownMenuItem>
        <DropdownMenuItem className="text-xs">Restore</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SnippetActionsMenu;
