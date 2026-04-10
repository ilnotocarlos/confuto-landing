export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 py-8 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
        <p>
          <a href="mailto:ciao@confuto.com" className="hover:text-foreground">
            ciao@confuto.com
          </a>
        </p>
        <p>Confuto — P.IVA IT08070570968</p>
        <div className="flex gap-4">
          <p>Brand Identity XXX</p>
          <p>Web XXX</p>
        </div>
      </div>
    </footer>
  );
}
