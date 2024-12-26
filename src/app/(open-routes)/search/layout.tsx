import React from "react";
import ChildrenWrapper from "./children-wrapper";
import FilterPanel from "./filters";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <FilterPanel />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </div>
  );
}
