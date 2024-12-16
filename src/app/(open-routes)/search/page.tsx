// import SnippetsContainer from "@/components/snippet/snippet";
import Container from "@/components/ui/container";
import { getSnippets } from "@/lib/actions/snippet.actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ReadonlyCodeview from "@/components/readonly_codeview";
import FilterPanel from "./filters";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue, sort } = searchParams;
  const snippets = await getSnippets({ query: (searchValue as string) || "" });

  return (
    <Container className="mt-8">
      <div className="grid gap-4 md:grid-cols-2">
        {snippets.map((snippet, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-md">{snippet.title}</CardTitle>
              <CardDescription>{snippet.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ReadonlyCodeview
                className="h-[200px]"
                code={snippet.codeValue}
                language={snippet.codeLanguage}
                copyCode
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-sm text-muted-foreground">{snippet.codeLanguage}</span>
              {/* <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{Math.floor(Math.random() * 100) + 1}</span>
              </div> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
