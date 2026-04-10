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

const skills = [
  "Design Thinking",
  "Service Design",
  "Facilitazione di team",
  "Future Thinking",
  "Organizational Design",
  "Collaborative design",
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

export function SectorsSection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <h2 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-foreground">
            Confuto non ha limiti di settore.
          </span>{" "}
          <span className="text-muted-foreground">
            Funziona ovunque ci siano problemi da risolvere, con aree diverse,
            tutti allo stesso tavolo
          </span>
        </h2>

        <ul className="mt-10 columns-2 gap-6 sm:columns-3 md:columns-4">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="border-b border-border pb-2 pt-2 text-sm"
            >
              {sector}
            </li>
          ))}
        </ul>

        <h3 className="mt-16 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl">
          Ovunque ci siano persone che vogliono fare,
          <br />
          il metodo trova casa.
        </h3>
        <p className="mt-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Confuto pensa questa lingua, ma la semplifica per tutti
        </p>
        <ul className="mt-6 columns-2 gap-6 sm:columns-3 md:columns-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border-b border-border pb-2 pt-2 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
