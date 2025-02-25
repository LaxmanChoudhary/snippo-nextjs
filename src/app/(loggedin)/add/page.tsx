import React from "react";
import SnippetForm from "@/components/snippet/snippet-form";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Container from "@/components/ui/container";

const AddSnippetPage = () => {
  const user = currentUser();

  if (!user) redirect("/sign-in");

  return (
    <Container>
      <SnippetForm className="h-[500px]" />
    </Container>
  );
};

export default AddSnippetPage;
