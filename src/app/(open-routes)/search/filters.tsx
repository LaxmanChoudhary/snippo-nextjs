import React from "react";
import Container from "@/components/ui/container";
import Search from "@/components/search";

export default function FilterPanel() {
  return (
    <Container className="mt-8">
      <Search showClearBtn showSearchBtn />
    </Container>
  );
}
