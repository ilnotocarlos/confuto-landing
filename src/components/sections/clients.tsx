const clients = [
  "Alfa Romeo",
  "Flos",
  "Fincantieri",
  "Ferragamo",
  "Valentino",
  "Costa Crociere",
  "Consorzio Agricolo",
  "Douglas",
  "Intesa San Paolo",
  "Generali",
  "E.ON",
  "ENI",
  "Roche",
  "Bracco",
  "NABA",
  "Barilla",
  "Provincia di Bolzano",
  "Vodafone",
  "Land of Fashion",
  "Provincia di Mantova",
  "Mercato Metropolitano",
];

export function ClientsSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          In buona compagnia dei grandi
        </p>
        <p className="mt-10 max-w-3xl text-lg">
          {clients.join(" — ")} — ...
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          Oltre ai grandi si sta bene in compagnia dei medio/piccoli e delle
          startup con i muscoli
        </p>
      </div>
    </section>
  );
}
