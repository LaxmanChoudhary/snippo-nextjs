import CodeView from "@/components/snippet/code-view";
import { getSnippetBySlug } from "@/lib/actions/snippet.actions";
import React from "react";

const SnippetPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getSnippetBySlug(params.slug);
  const snippet = data[0];

  return (
    <div className="grid gap-2 xl:h-[calc(100lvh-32px)]">
      <div>
        <p className="text font-semibold">{snippet.title}</p>
        <p className="text-sm text-muted-foreground">{snippet.description}</p>
      </div>
      <CodeView
        code={snippet.codeValue}
        language={snippet.codeLanguage}
        editorClassName="!text-sm"
        copyCode
      />
    </div>
  );
};

export default SnippetPage;
