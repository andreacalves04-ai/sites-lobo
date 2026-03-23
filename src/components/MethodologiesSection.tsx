import { Users, Target, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const methodologies = [
  {
    icon: Users,
    iconClass: "text-primary",
    step: "01",
    title: "Metodologia de squads",
    description:
      "Operamos com times multidisciplinares e autônomos, utilizando frameworks ágeis (Scrum, SAFe6) para garantir transparência, ciclos curtos de entrega e adaptação contínua.",
  },
  {
    icon: Target,
    iconClass: "text-accent",
    step: "02",
    title: "Consultoria 360º",
    description:
      "Diagnóstico profundo, planejamento estratégico e execução orientada a dados, garantindo que a tecnologia esteja sempre a serviço do negócio.",
  },
  {
    icon: Cpu,
    iconClass: "text-sky-500",
    step: "03",
    title: "Ciclo de IA & inovação",
    description:
      "Da viabilidade à arquitetura de agentes e à engenharia em produção — POCs e MVPs com portões de qualidade, para inovar sem perder escala nem governança.",
  },
];

const MethodologiesSection = () => {
  return (
    <section
      id="metodologias"
      className="section-rhythm-canvas border-y border-stone-300/60 py-24"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Como entregamos valor
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Nossas <span className="text-accent">metodologias</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Como traduzimos DNA AI-first em ritmo de entrega: squads autônomos, consultoria orientada a valor e
            ciclo contínuo de IA até produção.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {methodologies.map((item) => (
            <div
              key={item.step}
              className="flashlight-card group relative rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 text-center shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
            >
              <span
                className="pointer-events-none absolute right-6 top-4 z-[4] font-mono text-4xl font-bold text-stone-200 md:text-5xl"
                aria-hidden
              >
                {item.step}
              </span>
              <div
                className={cn(
                  "relative z-[3] mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950",
                  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-stone-700/60"
                )}
              >
                <item.icon className={cn("h-7 w-7", item.iconClass)} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="relative z-[3] mb-4 font-sans text-lg font-semibold tracking-tight text-stone-900">
                {item.title}
              </h3>
              <p className="relative z-[3] text-sm leading-relaxed text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologiesSection;
