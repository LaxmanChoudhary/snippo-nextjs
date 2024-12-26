import CodeView from "@/components/snippet/code-view";
import Container from "@/components/ui/container";
import { getSnippetBySlug } from "@/lib/actions/snippet.actions";
import React from "react";

const SnippetPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSnippetBySlug(params.slug);
  const snippet = data[0];

  return (
    <Container className="mt-4 space-y-4">
      <div>
        <p className="text font-semibold">{snippet.title}</p>
        <p className="text-sm text-muted-foreground">{snippet.description}</p>
      </div>
      <CodeView code={snippet.codeValue} language={snippet.codeLanguage} editorClassName="!text-sm" copyCode />
    </Container>
  );
};

export default SnippetPage;
