import Container from "@/components/ui/container";
import { getSnippets } from "@/lib/actions/snippet.actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReadonlyCodeview from "@/components/readonly_codeview";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue, sort } = searchParams;
  const snippets = await getSnippets({ query: (searchValue as string) || "" });

  return (
    <Container className="mt-4">
      {snippets.length === 0 && (
        <div className="flex flex-col gap-4 items-center justify-center h-[200px] w-full text-neutral-700">
          <Search size={48} />
          <p className="text-sm">No snippets to match your search.</p>
        </div>
      )}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {snippets.map((snippet, i) => (
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
    </Container>
  );
}
