import { Package, Users, Compass, Sparkles, Rocket, Network } from "lucide-react";
import { AuraPillLink } from "@/components/AuraPillLink";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Package,
    iconClass: "text-primary",
    title: "Desenvolvimento de Software & Produtos",
    description: "Criação de sistemas sob medida, focados em escalabilidade e experiência do usuário.",
  },
  {
    icon: Users,
    iconClass: "text-sky-400",
    title: "Alocação de Squads",
    description: "Times de alta performance prontos para integrar sua operação e acelerar entregas.",
  },
  {
    icon: Compass,
    iconClass: "text-emerald-400",
    title: "Consultoria Estratégica & Gestão de Projetos",
    description: "Governança e eficiência baseadas nas melhores práticas globais.",
  },
  {
    icon: Sparkles,
    iconClass: "text-accent",
    title: "Agentes de IA & Automação",
    description: "Desenho e implementação de arquiteturas de IA para otimizar processos e decisões.",
  },
  {
    icon: Rocket,
    iconClass: "text-orange-400",
    title: "POCs e MVPs",
    description: "Validação rápida de ideias com foco em tempo de mercado e redução de riscos.",
  },
  {
    icon: Network,
    iconClass: "text-cyan-400",
    title: "Arquitetura de Software com IA Aplicada",
    description: "Projetos de arquiteturas modernas e escaláveis com inteligência artificial embarcada em sistemas corporativos.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="servicos"
      className="section-rhythm-canvas border-y border-stone-300/60 py-24"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Nossas ofertas
          </span>
          <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Nossos serviços
          </h2>
          <p className="mx-auto max-w-2xl text-stone-600">
            Do diagnóstico à operação: consultoria, engenharia, arquitetura e agentes de IA no mesmo DNA
            AI-first — para resultado e escala com governança.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flashlight-card group flex flex-col rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.08)] transition-[colors,box-shadow] duration-300 ease-aura-out hover:bg-white hover:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.12)]"
            >
              <div
                className={cn(
                  "relative z-[3] mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950",
                  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-stone-700/80",
                  "transition-transform duration-500 ease-out group-hover:scale-105"
                )}
              >
                <service.icon className={cn("h-8 w-8", service.iconClass)} strokeWidth={1.75} aria-hidden />
              </div>

              <h3 className="relative z-[3] mb-3 font-sans text-lg font-semibold tracking-tight text-stone-900">
                {service.title}
              </h3>

              <p className="relative z-[3] flex-1 text-sm leading-relaxed text-stone-600">{service.description}</p>

              <div className="relative z-[3] mt-8 border-t border-stone-100 pt-6">
                <AuraPillLink
                  href="#contato"
                  tone="light"
                  variant="primary"
                  className="w-full justify-center sm:w-auto sm:justify-start"
                >
                  Saiba mais
                </AuraPillLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
          <AuraPillLink href="#contato" tone="light" variant="primary">
            Fale conosco
          </AuraPillLink>
          <AuraPillLink to="/metodologia" tone="light" variant="secondary">
            Ver metodologias
          </AuraPillLink>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
