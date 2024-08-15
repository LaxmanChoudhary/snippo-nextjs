"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import LanguageSelect from "./language-select";
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
import CopyButton from "./copy-btn";
import { cn } from "@/lib/utils";

const CodeView = ({
  code,
  language,
  setCode,
  setLanguage,
  className,
  editorClassName,
  editable = false,
  copyCode = false,
}: {
  code: string;
  language: string;
  setCode?: any;
  setLanguage?: any;
  className?: string;
  editorClassName?: string;
  editable?: boolean;
  copyCode?: boolean;
}) => {
  return (
    <ScrollArea
      className={cn(
        "overflow-auto relative bg-slate-100 bg-opacity-75",
        className
      )}
    >
      {!editable && (
        <div className="absolute text-xs tracking-tighter px-1 flex items-center justify-center border z-10 bg-white rounded bottom-2 right-2">
          <p>{language}</p>
        </div>
      )}
      <div className={"absolute flex gap-2 top-4 right-4 z-20"}>
        {copyCode && <CopyButton content={code} />}
        {editable && (
          <LanguageSelect
            language={language}
            setLanguage={setLanguage ? setLanguage : () => {}}
          />
        )}
      </div>
      <Editor
        value={code}
        padding={10}
        onValueChange={setCode ? setCode : () => {}}
        highlight={(code) => highlight(code, languages[language])}
        style={{
          fontFamily: "monospace",
          fontSize: 17,
        }}
        className={cn(
          "rounded min-h-[100px] !text-sm tracking-tight",
          editorClassName
        )}
        disabled={!editable}
        preClassName="!whitespace-pre"
        textareaClassName="outline-none"
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default CodeView;
