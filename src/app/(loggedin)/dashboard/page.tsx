import React, { Suspense } from "react";
import SnippetContainer from "../../../components/main/snippet-container";
import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <>
      <h1 className="text-3xl mb-6">
        my<span className="font-bold">S</span>nippets
      </h1>
      <Suspense fallback={<h1 className="text-xl font-bold">Loading...</h1>}>
        <SnippetContainer userId={user?.id} />
      </Suspense>
    </>
  );
}
