import Link from "next/link";
import React, { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { PlusCircle, Trash2Icon } from "lucide-react";

import SnippetContainer from "../../../components/main/snippet-container";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

  return (
    <Container>
      <div className="w-full flex justify-end">
        <Button className="flex items-center" variant={"link"} size={"sm"} title="add snippet" asChild>
          <Link href={"/trash"}>
            <Trash2Icon />
            Bin
          </Link>
        </Button>
        <Button variant={"link"} size={"sm"} title="add snippet" asChild>
          <Link href={"/add"}>
            <PlusCircle />
            Add
          </Link>
        </Button>
      </div>
      <Suspense fallback={<h1 className="text-xl font-bold">Loading...</h1>}>
        <SnippetContainer userId={user?.id} />
      </Suspense>
    </Container>
  );
}
