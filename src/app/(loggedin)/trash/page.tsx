import React, { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";
import SnippetContainer from "../../../components/main/snippet-container";

export default async function Trash() {
  const user = await currentUser();

  return (
    <>
      <h1 className="text-3xl mb-6">
        <span className="font-bold">T</span>rash
      </h1>
      <Suspense fallback={<h1 className="text-xl font-bold">Loading...</h1>}>
        <SnippetContainer userId={user?.id} inTrash />
      </Suspense>
    </>
  );
}
