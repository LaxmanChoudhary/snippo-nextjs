import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="sm:mt-8">
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from([1, 2, 3, 4]).map((_, i) => (
          <div key={i} className="h-[350px] w-full animate-pulse bg-neutral-100 dark:bg-neutral-800"></div>
        ))}
      </div>
    </Container>
  );
}
