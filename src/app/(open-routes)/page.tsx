import Container from "@/components/ui/container";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReadonlyCodeview from "@/components/readonly_codeview";
import { getSnippets } from "@/lib/actions/snippet.actions";
import Link from "next/link";
import Search from "@/components/search";

export default async function Home() {
  const snippets = await getSnippets({ query: "", isPublic: true });

  return (
    <Container>
      <main className="flex-grow px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover and Share Code Snippets</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Browse thousands of code snippets shared by developers worldwide.
          </p>
          <div className="flex flex-col justify-center gap-4">
            <Search showSearchBtn />
            {/* <ul className="flex text-xs font-light justify-center gap-2">
              {["javascript", "python", "java", "typescript"].map((lang) => (
                <li className="py-1 px-2 shadow border rounded hover:shadow-sm cursor-pointer" key={lang}>
                  <Link href={lang}>{lang}</Link>
                </li>
              ))}
            </ul> */}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="mr-2" />
            Trending Snippets
          </h2>
          <div className="flex flex-col gap-4">
            {snippets.slice(0, 4).map((snippet, i) => (
              <Card key={i} className="w-full">
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
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild variant={"link"}>
              <Link href={"/search"}>Load more snippets...</Link>
            </Button>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to share your snippets?</h2>
          <p className="text-muted-foreground mb-6">
            Join our community to share your code, collaborate with others, and build your coding portfolio.
          </p>
          <Button size="lg">Sign up for free</Button>
        </section>
      </main>
    </Container>
  );
}
