import SnippetsContainer from "@/components/snippet/snippet";
import { getPublicSnippets } from "@/lib/actions/snippet.actions";

export default async function BrowsePage() {
  const snippets = await getPublicSnippets();

  return <SnippetsContainer data={snippets} />;
}
