import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JavaScriptIcon from "../icons/js";
import PythonIcon from "../icons/py";
import JavaIcon from "../icons/java";
import HTMLIcon from "../icons/html";
import CSSIcon from "../icons/css";
import { cn } from "@/lib/utils";
import TypeScriptIcon from "../icons/ts";

const LanguageSelect = ({
  language,
  setLanguage,
  className,
}: LanguageSelectProps) => {
  const ICON_SIZE = 16
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className={cn("h-7 w-[120px] md:w-[150px] text-xs", className)}>
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent className="text-xs">
        <SelectItem value="typescript" className="text-xs">
          <TypeScriptIcon height={ICON_SIZE} width={ICON_SIZE} text="Typescript" />
        </SelectItem>
        <SelectItem value="javascript" className="text-xs">
          <JavaScriptIcon height={ICON_SIZE} width={ICON_SIZE} text="Javascript" />
        </SelectItem>
        <SelectItem value="python" className="text-xs">
          <PythonIcon height={ICON_SIZE} width={ICON_SIZE} text="Python" />
        </SelectItem>
        <SelectItem value="java" className="text-xs">
          <JavaIcon height={ICON_SIZE} width={ICON_SIZE} text="Java" />
        </SelectItem>
        <SelectItem value="html" className="text-xs">
          <HTMLIcon height={ICON_SIZE} width={ICON_SIZE} text="HTML" />
        </SelectItem>
        <SelectItem value="css" className="text-xs">
          <CSSIcon height={ICON_SIZE} width={ICON_SIZE} text="CSS" />
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
