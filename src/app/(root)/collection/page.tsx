import SnippetsContainer from "@/components/snippet/snippet";
import { getUserSnippets } from "@/lib/actions/snippet.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CollectionPage() {
  const user = await currentUser();

  if (!user) redirect("/sign-in")

  const data = await getUserSnippets(user?.id, { deleted: false });

  return (
    <div>
      {data.length ? (
        <SnippetsContainer data={data} />
      ) : (
        <div className="flex text-muted-foreground items-center gap-2">
          <span className="text-3xl">{`{`}</span>
          <p>You do not have any submissions to show</p>
          <span className="text-3xl">{`}`}</span>
        </div>
      )}
    </div>
  );
}
