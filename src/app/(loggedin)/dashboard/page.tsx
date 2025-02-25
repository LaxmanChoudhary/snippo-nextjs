import React, { Suspense } from "react";
import SnippetContainer from "../../../components/main/snippet-container";
import { currentUser } from "@clerk/nextjs/server";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <Container className="mt-4">
      <div className="w-full flex justify-end">
        <Button variant={"link"} title="add snippet" asChild>
          <Link href={"/add"}>
            <PlusCircle /> Add
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl mb-6">
        my<span className="font-bold">S</span>nippets
      </h1>
      <Suspense fallback={<h1 className="text-xl font-bold">Loading...</h1>}>
        <SnippetContainer userId={user?.id} />
      </Suspense>
    </Container>
  );
}
