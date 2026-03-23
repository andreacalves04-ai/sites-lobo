import {
  Landmark,
  Target,
  Puzzle,
  Cog,
  ShieldCheck,
  ArrowRight,
  Bot,
  Users,
} from "lucide-react";
import { AuraPillLink } from "@/components/AuraPillLink";
import { cn } from "@/lib/utils";

const pipelineSteps = [
  { icon: Landmark, label: "Discovery", iconClass: "text-primary" },
  { icon: Target, label: "Intent", iconClass: "text-accent" },
  { icon: Puzzle, label: "Units", iconClass: "text-sky-400" },
  { icon: Cog, label: "Bolts", iconClass: "text-emerald-400" },
  { icon: ShieldCheck, label: "Quality Gate", iconClass: "text-violet-400" },
];

const AIDLCOperatingSystem = () => {
  return (
    <section
      id="ai-dlc-os"
      className="relative overflow-hidden border-y border-stone-800 bg-stone-950 py-24 text-stone-100"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(234,179,8,0.06),transparent)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-5 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            AI‑DLC Operating System™
          </span>
          <h2 className="mb-6 font-sans text-3xl font-semibold leading-tight tracking-tighter text-white md:text-4xl lg:text-[2.75rem]">
            Não desenvolvemos software.{" "}
            <span className="text-accent">Orquestramos valor.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg">
            O AI‑DLC é o núcleo operacional do DNA AI-first da Lobo Soluções: transforma intenções de
            negócio em entregas validadas por arquitetura, testes automatizados e governança — com IA
            acelerando e especialistas garantindo decisões críticas.
          </p>

          <div className="mx-auto inline-flex max-w-lg flex-col items-stretch gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:max-w-none sm:inline-flex sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/25">
                <Bot className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="text-left text-sm font-semibold text-white">IA executa.</span>
            </div>
            <span className="hidden h-8 w-px shrink-0 bg-white/15 sm:block" aria-hidden />
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                <Users className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="text-left text-sm font-semibold text-white">Humanos decidem.</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="mb-2 font-sans text-xl font-semibold tracking-tight text-white md:text-2xl">
              Pipeline de maturidade
            </h3>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-stone-400">
              Da ideia ao valor validado — progressão estratégica, não apenas quadro Kanban.
            </p>
          </div>

          <div className="mx-auto hidden max-w-5xl items-center justify-between gap-1 md:flex lg:gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex min-w-0 flex-1 items-center">
                <div className="flex w-full flex-col items-center gap-4">
                  <div
                    className={cn(
                      "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950",
                      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-white/10",
                      "transition-transform duration-300 ease-aura-out hover:scale-[1.04]"
                    )}
                  >
                    <step.icon className={cn("h-7 w-7", step.iconClass)} strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="text-center font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-stone-500">
                    {step.label}
                  </span>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="mx-1 h-5 w-5 shrink-0 text-stone-600 lg:mx-2" aria-hidden />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5 md:hidden">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-3">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-800 to-stone-950 ring-1 ring-white/10",
                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                  )}
                >
                  <step.icon className={cn("h-6 w-6", step.iconClass)} strokeWidth={1.75} aria-hidden />
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {step.label}
                </span>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 rotate-90 text-stone-600" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AuraPillLink to="/metodologia" tone="dark" variant="primary">
            Metodologia completa
          </AuraPillLink>
          <AuraPillLink href="#servicos" tone="dark" variant="secondary">
            Nossos serviços
          </AuraPillLink>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-[#f8f7f4] via-stone-950/55 to-transparent"
        aria-hidden
      />
    </section>
  );
};

export default AIDLCOperatingSystem;
