export function SectorsV2() {
  const sectors = [
    "Food and Beverage",
    "Beauty",
    "Travel",
    "Fashion",
    "Mobility",
    "Energy",
    "Telco",
    "Banking",
    "Healthcare",
    "Insurance",
    "Ho.Re.Ca",
    "Pharma",
    "Education",
    "Formazione",
    "Product",
  ];

  const departments = [
    "Marketing",
    "Human Resources",
    "Sales",
    "Customer Experience",
    "Comunicazione",
    "Operation",
    "Innovazione",
    "Strategia",
    "R&S",
  ];

  const disciplines = [
    "Design Thinking",
    "Service Design",
    "Facilitazione di team",
    "Future Thinking",
    "Organizational Design",
    "Collaborative Design",
    "User Experience Design",
    "Cultural Design",
    "Strategy",
    "Customer Experience",
    "User Research",
    "Business Design",
    "Innovation",
    "Brand",
    "Generative AI",
  ];

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="text-center mb-14">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-sand font-mono text-xs text-charcoal/40 mb-6">
            06/
          </span>

          <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] tracking-tight text-forest">
            <span className="font-light">Con che</span>{" "}
            <span className="font-bold">settori e reparti?</span>
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
            Non abbiamo limiti perché il metodo che usiamo è applicabile a tutti
            i settori.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4 text-center">
              Settori
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
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4 text-center">
              Reparti
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

          <div>
            <p className="text-xs uppercase tracking-widest text-charcoal/40 mb-4 text-center">
              Confuto pensa questa lingua, ma la semplifica per tutti
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="rounded-full bg-mint/20 border border-mint/40 px-4 py-2 text-sm text-forest"
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
