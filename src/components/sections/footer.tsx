export function Footer() {
  return (
    <footer className="bg-forest text-cream/70 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <a
          href="mailto:ciao@confuto.com"
          className="text-cream hover:text-cream/100 transition-colors duration-200"
        >
          ciao@confuto.com
        </a>

        <span className="font-mono text-sm text-cream/40">
          P. IVA IT08070570968
        </span>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-cream/50 hover:text-cream transition-colors duration-200"
          >
            LinkedIn
          </a>
          <span className="w-px h-4 bg-cream/20" />
          <span className="text-sm text-cream font-medium">It</span>
          <span className="text-sm text-cream/50 hover:text-cream transition-colors duration-200 cursor-pointer">
            En
          </span>
        </div>
      </div>
    </footer>
  );
}
