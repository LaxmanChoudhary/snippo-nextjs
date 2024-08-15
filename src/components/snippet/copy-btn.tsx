"use client";
import { cn } from "@/lib/utils";
import { ClipboardCheck, ClipboardCopy } from "lucide-react";
import React, { useState } from "react";

export const CopyButton = ({
  content,
  className,
  size=16,
}: {
  content: string;
  className?: string;
  size?: number;
}) => {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    // copy code
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "bg-white flex items-center justify-center h-7 w-7 border rounded p-1 hover:bg-primary-foreground",
        className
      )}
    >
      <button
        onClick={copyHandler}
        disabled={copied}
        title={copied ? "copied!" : "copy"}
      >
        {copied ? (
          <ClipboardCheck size={size} />
        ) : (
          <ClipboardCopy size={size} />
        )}
      </button>
    </div>
  );
};

export default CopyButton;
