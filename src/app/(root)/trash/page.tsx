import { getUserSnippets } from "@/lib/actions/snippet.actions";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";
import SnippetsContainer from "@/components/snippet/snippet";

const Trashpage = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const data = await getUserSnippets(user?.id, { deleted: true });

  return (
    <div>
      {data.length ? (
        <SnippetsContainer data={data} />
      ) : (
        <div className="flex text-muted-foreground items-center gap-2">
          <p>No trash to clear!</p>
        </div>
      )}
    </div>
  );
};

export default Trashpage;
