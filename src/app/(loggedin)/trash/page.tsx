import React, { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";
import SnippetContainer from "../../../components/main/snippet-container";
import Container from "@/components/ui/container";

export default async function Trash() {
  const user = await currentUser();

  return (
    <Container>
      <h1 className="text-xl">
        Your deleted snippets
      </h1>
      <Suspense fallback={<h1 className="text-xl font-bold">Loading...</h1>}>
        <SnippetContainer userId={user?.id} inTrash />
      </Suspense>
    </Container>
  );
}
