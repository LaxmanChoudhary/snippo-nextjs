import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground p-2 relative h-8 justify-center sm:justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none gap-2",
        className
      )}
    >
      <SearchIcon size={16} />
      <p className="hidden sm:block text-center">search snippet...</p>
    </button>
  );
};

export default SearchBar;
