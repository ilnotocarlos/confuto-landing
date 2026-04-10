import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Solo idee condivise cambiano il futuro.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground">
          <span className="font-medium text-foreground">
            Le idee migliori sono già nella tua azienda.
          </span>{" "}
          Le aiutiamo ad emergere, strutturarsi, diventare prototipi e
          trasformarsi in decisioni.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Confuto lavora con PMI e Organizzazioni per validare prodotti,
          processi e servizi in giorni, non in mesi. Niente teoria, solo
          decisioni chiare e condivise.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-6 text-base">
            Prenota un assessment gratuito
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 px-6 text-base"
          >
            Scopri come funziona
          </Button>
        </div>
      </div>
    </section>
  );
}
