import React from "react";
import Container from "@/components/ui/container";
import Search from "@/components/search";

export default function FilterPanel() {
  return (
    <Container>
      <Search showClearBtn showSearchBtn />
    </Container>
  );
}
