export function V2QuoteSection({ children }: { children: string }) {
  return (
    <section className="bg-v2-bg">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl border-l-[3px] border-v2-accent py-4 pl-8">
          <p className="font-serif text-2xl italic leading-relaxed text-v2-text md:text-3xl">
            &ldquo;{children}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
