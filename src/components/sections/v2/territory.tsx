const sectors = [
  "Food & Beverage",
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

const skills = [
  "Design Thinking",
  "Service Design",
  "Facilitazione",
  "Future Thinking",
  "Organizational Design",
  "Customer Experience",
  "User Research",
  "Business Design",
  "Strategy",
  "Innovation",
  "Brand",
  "Generative AI",
];

const clients = [
  "Alfa Romeo",
  "Flos",
  "Fincantieri",
  "Ferragamo",
  "Valentino",
  "Costa Crociere",
  "Douglas",
  "Intesa San Paolo",
  "Generali",
  "E.ON",
  "ENI",
  "Roche",
  "Bracco",
  "NABA",
  "Barilla",
  "Vodafone",
  "Land of Fashion",
  "Mercato Metropolitano",
];

export function V2TerritorySection() {
  return (
    <section className="border-t border-v2-border bg-v2-bg">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
          Territorio
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold leading-snug text-v2-text md:text-5xl">
          Il metodo funziona ovunque.<br className="hidden md:block" />
          Le prove le abbiamo.
        </h2>

        {/* Settori */}
        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
            Settori
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-0 border-t border-v2-border sm:grid-cols-3 md:grid-cols-4">
            {sectors.map((s) => (
              <div key={s} className="border-b border-v2-border py-3">
                <span className="text-sm text-v2-text font-sans">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Competenze */}
        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
            Competenze
          </p>
          <p className="mt-4 text-base leading-loose text-v2-text font-sans">
            {skills.map((s, i) => (
              <span key={s}>
                {s}
                {i < skills.length - 1 && (
                  <span className="mx-2 text-v2-border">·</span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Clienti */}
        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-v2-text-muted font-sans">
            In buona compagnia
          </p>
          <p className="mt-4 font-serif text-xl leading-loose text-v2-text md:text-2xl">
            {clients.map((c, i) => {
              const isBold = i % 3 === 0;
              return (
                <span key={c}>
                  <span className={isBold ? "font-bold" : "font-normal"}>
                    {c}
                  </span>
                  {i < clients.length - 1 && (
                    <span className="mx-2 text-v2-border font-normal">·</span>
                  )}
                </span>
              );
            })}
            <span className="mx-2 text-v2-border font-normal">·</span>
            <span className="text-v2-text-muted font-normal">e altri</span>
          </p>
          <p className="mt-6 text-sm text-v2-text-muted font-sans">
            Dai grandi brand alle PMI. Il pensiero chiaro non ha taglia.
          </p>
        </div>
      </div>
    </section>
  );
}
