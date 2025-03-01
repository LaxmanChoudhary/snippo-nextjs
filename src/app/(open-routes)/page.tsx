import Container from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReadonlyCodeview from "@/components/readonly_codeview";
import { getSnippets } from "@/lib/actions/snippet.actions";
import Link from "next/link";
import Search from "@/components/search";

export default async function Home() {
  const snippets = await getSnippets({ query: "", isPublic: true });

  return (
    <Container>
      <Search showSearchBtn />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        {snippets.slice(0, 4).map((snippet, i) => (
          <Card key={i} className="w-full border-neutral-800 rounded-none">
            <CardHeader className="p-4">
              <CardTitle className="text-md">
                <Link href={`/snippet/${snippet.slug}`} className="hover:underline">
                  {snippet.title}
                </Link>
              </CardTitle>
              <CardDescription>{snippet.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ReadonlyCodeview
                className="h-[250px]"
                code={snippet.codeValue}
                language={snippet.codeLanguage}
                copyCode
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button asChild variant={"link"}>
          <Link href={"/search"}>Load more snippets...</Link>
        </Button>
      </div>
    </Container>
  );
}
