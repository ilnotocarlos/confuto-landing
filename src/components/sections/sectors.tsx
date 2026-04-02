export function SectorsSection() {
  const sectors = [
    "Food & Beverage",
    "Beauty",
    "Travel",
    "Fashion",
    "Energy",
    "Telco",
    "Banking",
    "Healthcare",
    "Education",
    "Pharma",
  ];

  const departments = [
    "Marketing",
    "Sales",
    "HR",
    "Operations",
    "Innovazione",
    "Customer Experience",
    "R&S",
  ];

  return (
    <section className="min-h-[60vh] flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center w-full">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
          08/
        </span>

        <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-forest leading-snug max-w-2xl mx-auto">
          Il metodo funziona ovunque ci sia un&apos;idea da validare o un
          problema da risolvere.
        </h2>

        <div className="mt-12 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4">
              Alcuni settori
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-sand px-4 py-2 text-sm text-charcoal/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4">
              Alcuni reparti
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-sand px-4 py-2 text-sm text-charcoal/70"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
