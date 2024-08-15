import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "short" | "full"
}

export default function Logo({ className, type="full" }: LogoProps) {
  return (
    <div
      className={cn(
        "flex w-fit text-xl items-center text-slate-50 bg-slate-900 dark:text-slate-900 dark:bg-slate-50 rounded py-1",
        className
      )}
    >
      <ChevronLeft />
      {type === "full" && <h1 className="font-mono">Snippo</h1>}
      <ChevronRight />
    </div>
  );
}
