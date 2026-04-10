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

export function SectorsSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Con che settori si fanno progetti?
        </p>
        <ul className="mx-auto mt-10 max-w-3xl columns-4 gap-6 text-left">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="border-b border-border pb-2 pt-2 text-sm"
            >
              {sector}
            </li>
          ))}
          <li className="pt-4 text-sm text-muted-foreground">
            Non abbiamo limiti perché il metodo che usiamo è applicabile a tutti
            i settori.
          </li>
        </ul>
      </div>
    </section>
  );
}
