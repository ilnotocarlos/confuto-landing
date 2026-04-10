import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-md flex flex-col items-center gap-4">
          <Button size="lg" className="h-11 px-6 text-base">
            Prenota una call
          </Button>
          <Button variant="outline" size="lg" className="h-11 px-6 text-base">
            Compila il Typeform o scrivi su Whatsapp
          </Button>
        </div>
      </div>
    </section>
  );
}
