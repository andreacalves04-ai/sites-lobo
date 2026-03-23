const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-stone-300 bg-[#ebebe3] py-8 text-center">
      <div className="container mx-auto space-y-4 px-6">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-stone-500">
          Lobo Soluções
        </p>
        <p className="mx-auto max-w-md text-xs leading-relaxed text-stone-500">
          DNA AI-first · agentes de IA, consultoria, engenharia e arquitetura
        </p>
        <p className="font-mono text-xs leading-relaxed text-stone-500">
          CNPJ 40.551.846/0001-3
          <span className="mx-2 text-stone-400" aria-hidden>
            ·
          </span>
          <a
            href="tel:+5511910604020"
            className="text-stone-600 underline decoration-stone-400 underline-offset-2 transition-colors hover:text-stone-900 hover:decoration-stone-900"
          >
            +55 11 91060-4020
          </a>
        </p>
        <p className="font-mono text-xs text-stone-500">
          © {year} · todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
