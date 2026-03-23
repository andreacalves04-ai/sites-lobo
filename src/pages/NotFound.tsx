import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuraPillLink } from "@/components/AuraPillLink";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-stone-500">
        Erro 404
      </p>
      <h1 className="mt-4 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
        Página não encontrada
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-stone-600">
        O endereço pode ter sido alterado ou digitado incorretamente. Volte ao início para continuar
        explorando a Lobo Soluções.
      </p>
      <div className="mt-10">
        <AuraPillLink to="/" tone="light" variant="primary" className="!normal-case tracking-wide">
          Voltar ao início
        </AuraPillLink>
      </div>
    </div>
  );
};

export default NotFound;
