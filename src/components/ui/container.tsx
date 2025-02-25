import clsx from "clsx";
import React from "react";

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("max-w-6xl mx-4 xl:mx-auto", className)}>{children}</div>;
}

export default Container;
