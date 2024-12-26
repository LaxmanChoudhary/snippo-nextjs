"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";
import CopyButton from "@/components/snippet/copy-btn";
import { cn } from "@/lib/utils";

const ReadonlyCodeview = ({
  code,
  language,
  className,
  editorClassName,
  copyCode = false,
}: {
  code: string;
  language: string;
  className?: string;
  editorClassName?: string;
  copyCode?: boolean;
}) => {
  return (
    <ScrollArea className={cn("overflow-auto relative bg-slate-100 bg-opacity-75", className)}>
      <div className="absolute text-xs tracking-tighter px-1 flex items-center justify-center border z-10 bg-white rounded bottom-2 right-2">
        <p>{language}</p>
      </div>
      <div className={"absolute flex gap-2 top-4 right-4 z-20"}>{copyCode && <CopyButton content={code} />}</div>
      <Editor
        value={code}
        padding={10}
        onValueChange={() => {}}
        highlight={(code) => highlight(code, languages[language])}
        style={{
          fontFamily: "monospace",
          fontSize: 17,
        }}
        className={cn("rounded min-h-[100px] !text-sm tracking-tight", editorClassName)}
        disabled
        preClassName="!whitespace-pre"
        textareaClassName="outline-none"
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ReadonlyCodeview;
