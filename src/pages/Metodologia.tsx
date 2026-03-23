import type { ElementType } from "react";
import { useId, useState } from "react";
import { AuraPillLink } from "@/components/AuraPillLink";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  Target,
  Puzzle,
  Cog,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Bot,
  Lightbulb,
  FileSearch,
  BarChart3,
  Layers,
  GitBranch,
  TestTube,
  Lock,
  Award,
  Building2,
  Fingerprint,
  CheckCircle2,
  XCircle,
  Cpu,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Cartão de fase na lista (corpo explicativo abre só ao acionar) */
const phaseCardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pipelineSteps = [
  { icon: Landmark, label: "Discovery", iconClass: "text-primary" },
  { icon: Target, label: "Intent", iconClass: "text-accent" },
  { icon: Puzzle, label: "Units", iconClass: "text-sky-400" },
  { icon: Cog, label: "Bolts", iconClass: "text-emerald-400" },
  { icon: ShieldCheck, label: "Quality Gate", iconClass: "text-violet-400" },
];

/* ------------------------------------------------------------------ */
/*  PAGE HERO — faixa escura (alinhada ao bloco AI‑DLC da home)         */
/* ------------------------------------------------------------------ */
const PageHero = () => (
  <section className="relative overflow-hidden border-b border-stone-800 bg-stone-950 pb-20 pt-10 text-stone-100 md:pt-14">
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]"
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(234,179,8,0.06),transparent)]"
      aria-hidden
    />

    <motion.div
      className="container relative z-10 mx-auto px-6 text-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.span
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500"
      >
        AI‑DLC Operating System™
      </motion.span>
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mb-6 font-sans text-3xl font-semibold leading-tight tracking-tighter text-white md:text-5xl"
      >
        Engenharia orientada a <span className="text-accent">valor</span>
      </motion.h1>
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-stone-400 md:text-lg"
      >
        O AI‑DLC da Lobo Soluções — DNA AI-first em cada etapa: da descoberta estratégica à governança
        de qualidade, com agentes, consultoria, engenharia e arquitetura no mesmo fluxo — aqui, em
        detalhe.
      </motion.p>
      <motion.div
        variants={scaleIn}
        transition={{ duration: 0.5 }}
        className="mx-auto inline-flex max-w-lg flex-col items-stretch gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm sm:max-w-none sm:inline-flex sm:flex-row sm:items-center sm:gap-6"
      >
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
      </motion.div>
    </motion.div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  PIPELINE — canvas Aura                                             */
/* ------------------------------------------------------------------ */
const MaturityPipeline = () => (
  <section className="section-rhythm-canvas section-rhythm-canvas-from-dark border-y border-stone-300/60 py-16">
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-2 font-sans text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
          Pipeline de maturidade
        </h2>
        <p className="mx-auto max-w-xl text-sm text-stone-600">
          Da ideia ao valor validado — progressão estratégica onde consultoria, arquitetura, engenharia e
          agentes de IA avançam juntos, sem perder governança.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto hidden max-w-5xl items-center justify-between gap-1 md:flex lg:gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerFast}
      >
        {pipelineSteps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex min-w-0 flex-1 items-center"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
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
              <ArrowRight className="mx-1 h-5 w-5 shrink-0 text-stone-500 lg:mx-2" aria-hidden />
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-5 md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainerFast}
      >
        {pipelineSteps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex flex-col items-center gap-3"
            variants={fadeUp}
            transition={{ duration: 0.3 }}
          >
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
              <ArrowRight className="h-4 w-4 rotate-90 text-stone-500" aria-hidden />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/*  PHASE CARDS                                                        */
/* ------------------------------------------------------------------ */
interface PhaseField {
  label: string;
}
interface PhaseCardProps {
  step: string;
  icon: ElementType;
  iconClass: string;
  title: string;
  subtitle: string;
  description: string;
  fields?: PhaseField[];
  badge?: string;
  highlight: string;
  quote: string;
}

function PhaseCard({
  step,
  icon: Icon,
  iconClass,
  title,
  subtitle,
  description,
  fields,
  badge,
  highlight,
  quote,
}: PhaseCardProps) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headerId = `${panelId}-header`;

  const shellTransition = reduceMotion
    ? { duration: 0.2 }
    : { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

  const sceneEase = [0.16, 1, 0.3, 1] as const;
  const sceneEaseOut = [0.4, 0, 0.2, 1] as const;

  return (
    <motion.article
      layout={false}
      variants={phaseCardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { type: "spring", stiffness: 380, damping: 26 },
            }
      }
      className={cn(
        "flashlight-card group relative overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9]",
        "shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_-8px_rgba(0,0,0,0.08)]",
        "transition-[box-shadow,border-color,background-color] duration-300 ease-aura-out",
        open && "border-stone-300/90 bg-white shadow-[0_22px_56px_-24px_rgba(0,0,0,0.12)] ring-1 ring-stone-200/70",
        !open &&
          "hover:border-stone-300/90 hover:bg-white hover:shadow-[0_22px_56px_-24px_rgba(0,0,0,0.14)] hover:ring-1 hover:ring-stone-200/70"
      )}
    >
      <button
        type="button"
        id={headerId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative z-[3] flex w-full flex-col gap-4 border-b border-stone-200 bg-[#fafaf9]/80 px-6 py-6 text-left transition-colors duration-300 ease-aura-out md:gap-5 md:px-8 md:py-7",
          "hover:bg-stone-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ebebe3]",
          open ? "border-stone-200 bg-white" : "group-hover:bg-white"
        )}
      >
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex min-w-0 flex-1 items-start gap-4">
            <motion.span
              className="select-none font-mono text-[clamp(2.5rem,5vw,3.25rem)] font-bold leading-none tabular-nums text-stone-200 transition-colors duration-300 group-hover:text-stone-300"
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.85, 1, 0.85],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
              }
            >
              {step}
            </motion.span>
            <div className="min-w-0 pt-1">
              <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Fase {step}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950",
                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-stone-700/80",
                    "transition-transform duration-300 ease-aura-out group-hover:-rotate-2 group-hover:scale-105"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-6 w-6 transition-transform duration-500 ease-out group-hover:scale-110",
                      iconClass
                    )}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h3 className="font-sans text-lg font-semibold leading-snug tracking-tight text-stone-900 md:text-xl">
                  {title}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-3 sm:items-end sm:pt-1">
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm transition-transform duration-300 ease-aura-out",
                open && "rotate-180 border-stone-300"
              )}
              aria-hidden
            >
              <ChevronDown className="h-5 w-5 text-stone-600" strokeWidth={2} />
            </span>
            <span className="max-w-[10rem] text-right font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-stone-500 sm:max-w-none">
              {open ? "Fechar detalhes" : "Ver detalhes da fase"}
            </span>
          </div>
        </div>
        {!open && (
          <p className="w-full border-t border-stone-200/60 pt-3 font-sans text-sm font-semibold leading-snug text-accent md:pt-4">
            {subtitle}
          </p>
        )}
      </button>

      <AnimatePresence initial={false} mode="sync">
        {open && (
          <motion.div
            key={`phase-shell-${step}`}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={shellTransition}
            className="relative z-[3] overflow-hidden border-b border-stone-200"
          >
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: 32,
                      scale: 0.98,
                      filter: "blur(18px)",
                      clipPath: "inset(0 0 100% 0 round 0 0 0.75rem 0.75rem)",
                    }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      clipPath: "inset(0 0 0% 0 round 0 0 0.75rem 0.75rem)",
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 0.58,
                      delay: 0.06,
                      ease: sceneEase,
                      opacity: { duration: 0.48, delay: 0.06 },
                      filter: { duration: 0.52, delay: 0.05 },
                      clipPath: { duration: 0.56, ease: sceneEase, delay: 0.04 },
                    }
              }
              exit={
                reduceMotion
                  ? { opacity: 0, transition: { duration: 0.15 } }
                  : {
                      opacity: 0,
                      y: -24,
                      scale: 0.985,
                      filter: "blur(14px)",
                      clipPath: "inset(100% 0 0 0 round 0.75rem 0.75rem 0 0)",
                      transition: {
                        duration: 0.44,
                        ease: sceneEaseOut,
                        opacity: { duration: 0.32, ease: sceneEaseOut },
                        clipPath: { duration: 0.4, ease: sceneEaseOut },
                        filter: { duration: 0.35 },
                      },
                    }
              }
              className="bg-gradient-to-b from-stone-50/40 to-white will-change-[transform,opacity,filter]"
            >
              <div className="space-y-6 px-6 py-6 md:space-y-7 md:px-8 md:py-8">
                <div className="border-b border-stone-100 pb-5 md:pb-6">
                  <p className="mb-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Pergunta‑chave
                  </p>
                  <p className="font-sans text-base font-semibold leading-snug tracking-tight text-accent md:text-lg">
                    {subtitle}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-stone-600 md:text-[15px]">{description}</p>

                {fields && fields.length > 0 && (
                  <div>
                    <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                      Entregáveis &amp; artefatos
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {fields.map((f, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-stone-200 bg-[#fafaf9] px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-stone-600 shadow-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          {f.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {badge && (
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-2">
                    <Bot className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                    <span className="text-xs font-semibold leading-tight text-accent">{badge}</span>
                  </div>
                )}

                <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50/90 p-5 ring-1 ring-stone-200/60">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                  <p className="text-sm leading-relaxed text-stone-800">{highlight}</p>
                </div>

                <blockquote className="border-l-[3px] border-accent pl-5 font-sans text-sm font-semibold italic leading-relaxed text-stone-900">
                  {quote}
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

const phases: PhaseCardProps[] = [
  {
    step: "00",
    icon: Landmark,
    iconClass: "text-primary",
    title: "Discovery & Strategy",
    subtitle: "O Porquê antes do Como",
    description:
      "Antes de qualquer arquitetura ou linha de código, estruturamos o valor de negócio. A IA apoia com análise de histórico, mercado e backlog. A decisão estratégica é humana.",
    fields: [
      { label: "User Pain Point" },
      { label: "Persona" },
      { label: "Hipótese de Valor (Lean)" },
      { label: "OKRs" },
      { label: "RICE / WSJF" },
    ],
    highlight:
      "A IA apoia com análise de histórico, mercado e backlog. A decisão estratégica é humana.",
    quote: "Não iniciamos projetos. Iniciamos hipóteses validadas.",
  },
  {
    step: "01",
    icon: Target,
    iconClass: "text-accent",
    title: "Intent — Intenção Estratégica",
    subtitle: "Toda engenharia começa com uma métrica de negócio clara",
    description:
      "Aqui traduzimos a visão em engenharia orientada a resultado. Cada card carrega o outcome de negócio mensurável, constraints de compliance e guardrails arquiteturais.",
    fields: [
      { label: "Business Outcome" },
      { label: "Constraints & Compliance" },
      { label: "Success Metrics" },
      { label: "Guardrails Arquiteturais" },
    ],
    badge: "Agente validando alinhamento com visão de produto",
    highlight: "Nenhuma feature avança sem um objetivo de negócio vinculado e mensurável.",
    quote: "Toda engenharia começa com uma métrica de negócio clara.",
  },
  {
    step: "02",
    icon: Puzzle,
    iconClass: "text-sky-400",
    title: "Units — Design Lógico & Arquitetura",
    subtitle: "Arquitetura antes da aceleração",
    description:
      "A IA propõe o Logical Blueprint: subdomínios DDD são definidos, Data Flow é mapeado e contratos de API são estabelecidos antes da implementação.",
    fields: [
      { label: "Logical Blueprint" },
      { label: "Subdomínios DDD" },
      { label: "Data Flow Map" },
      { label: "Contratos de API" },
    ],
    highlight: "Não permitimos que IA gere código antes do Domain Design aprovado.",
    quote: "Velocidade sem arquitetura é dívida técnica acelerada.",
  },
  {
    step: "03",
    icon: Cog,
    iconClass: "text-emerald-400",
    title: "Bolts — Microiterações Assistidas (MCP)",
    subtitle: "Execução com Transparência Total",
    description:
      "IA lê contexto (código + design aprovado), executa alterações via MCP, dispara testes automatizados e ajusta automaticamente até passar.",
    fields: [{ label: "Execution Logs (MCP)" }, { label: "Test Status" }, { label: "Agent Status" }],
    badge: "MCP Agent executando micro-iteração",
    highlight:
      "Cada micro-iteração é rastreável — com logs de execução, status de testes e feedback em tempo real.",
    quote: "Não é geração de código. É engenharia assistida com feedback em tempo real.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    iconClass: "text-violet-400",
    title: "Quality Gate — Governança Real",
    subtitle: "Nenhuma entrega passa sem qualidade mensurável",
    description:
      "Integração com SonarQube para análise contínua. Radar visual de Bugs, Vulnerabilidades e Code Smells. Bloqueio automático caso falhe — Force Bypass apenas para senior.",
    fields: [
      { label: "Sonar Radar" },
      { label: "Bugs" },
      { label: "Vulnerabilidades" },
      { label: "Code Smells" },
      { label: "Force Bypass (Senior)" },
    ],
    highlight: "Bloqueio automático em caso de falha. Apenas senioridade autoriza bypass documentado.",
    quote: "A IA acelera. A governança protege o negócio.",
  },
];

const digitalTwinFields = [
  { icon: GitBranch, label: "Jira ID", value: "Integração real" },
  { icon: Bot, label: "Agent Status", value: "Running / Idle / Blocked" },
  { icon: Layers, label: "Logical Blueprint", value: "Domain Design aprovado" },
  { icon: BarChart3, label: "Sonar Health Radar", value: "Bugs · Vulns · Smells" },
  { icon: Cpu, label: "MCP Console Log", value: "Execution trace" },
  { icon: TestTube, label: "Quality Check", value: "Pass / Fail / Bypassed" },
];

const DigitalTwinSection = () => (
  <section className="relative overflow-hidden border-y border-stone-800 bg-stone-950 py-20 text-stone-100">
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <span className="mb-3 inline-block font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-stone-500">
          Rastreabilidade
        </span>
        <h2 className="font-sans text-xl font-semibold tracking-tight text-white md:text-2xl">
          Anatomia do card — <span className="text-accent">gêmeo digital</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-stone-400">
          Cada tarefa vira um Digital Twin na trilha do AI‑DLC: rastreável, auditável e governado — da
          consultoria à engenharia e aos agentes.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.5)] backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 bg-stone-900/60 px-6 py-4">
          <Fingerprint className="h-5 w-5 text-accent" aria-hidden />
          <span className="font-mono text-xs font-semibold text-white md:text-sm">
            CARD‑2847 — Refatorar módulo de pagamentos
          </span>
          <span className="ml-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-400">
            Quality Gate: Pass
          </span>
        </div>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {digitalTwinFields.map((field, i) => (
            <div key={i} className="flex items-start gap-3 bg-stone-950/80 p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <field.icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{field.label}</p>
                <p className="mt-0.5 text-xs text-stone-500">{field.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 bg-stone-900/40 px-6 py-4">
          <p className="text-center font-sans text-sm font-semibold italic text-stone-300">
            Cada entrega é rastreável, auditável e governada.
          </p>
        </div>
      </motion.div>
    </div>
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-[#f8f7f4] via-stone-950/55 to-transparent"
      aria-hidden
    />
  </section>
);

const marketItems = [
  "Usa IA sobretudo para ganhar velocidade de código, não de negócio",
  "Trabalha com sprints longos sem trilha clara de arquitetura e governança",
  "Mede esforço em vez de resultado, escala e impacto mensurável",
];
const ourItems = [
  "DNA AI-first: agentes, consultoria, engenharia e arquitetura no mesmo fluxo",
  "Governamos arquitetura e Intent antes de acelerar com IA",
  "Automatizamos qualidade e medimos impacto de negócio com escala e governança",
];

const CompetitiveEdge = () => (
  <section className="section-rhythm-canvas section-rhythm-canvas-from-dark border-y border-stone-300/60 py-20">
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flashlight-card group overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
        >
          <h3 className="relative z-[3] mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Enquanto o mercado…
          </h3>
          <ul className="relative z-[3] space-y-4">
            {marketItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500/70" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="flashlight-card group overflow-hidden rounded-2xl border border-accent/25 bg-[#fafaf9] p-8 shadow-[0_0_0_1px_rgba(139,92,246,0.08)] transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
        >
          <h3 className="relative z-[3] mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Nós…
          </h3>
          <ul className="relative z-[3] space-y-4">
            {ourItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="font-sans text-lg font-semibold leading-snug text-stone-900 md:text-xl">
          DNA AI-first não é empilhar ferramentas.
          <br />
          <span className="text-accent">É reorganizar consultoria, engenharia e agentes em torno da intenção de valor.</span>
        </p>
      </motion.div>
    </div>
  </section>
);

const experienceHighlights = [
  { icon: Award, label: "25+ anos em projetos críticos" },
  { icon: FileSearch, label: "PMP, SAFe, ITIL, Azure" },
  { icon: Building2, label: "Saúde, Setor Público, Indústria" },
  { icon: Cpu, label: "Arquitetura de Agentes & Plataformas Agênticas" },
];

const GovernanceExperience = () => (
  <section className="section-rhythm-paper section-rhythm-paper-from-canvas overflow-hidden border-y border-stone-300/60 py-20">
    <div className="container mx-auto px-6">
      <motion.div
        className="flashlight-card group mx-auto max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md md:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-[3] mb-8 text-center">
          <span className="mb-3 inline-block font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-stone-500">
            Credenciais
          </span>
          <h2 className="font-sans text-xl font-semibold tracking-tight text-stone-900 md:text-2xl">
            Governança + arquitetura ={" "}
            <span className="text-primary">segurança para inovar</span>
          </h2>
        </div>
        <motion.div className="relative z-[3] grid gap-6 sm:grid-cols-2" variants={staggerContainer}>
          {experienceHighlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 to-stone-950 ring-1 ring-stone-700/50">
                <item.icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="text-sm font-medium text-stone-800">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-[3] mt-8 text-center"
        >
          <p className="font-sans text-sm font-semibold italic text-accent">
            DNA AI-first com responsabilidade — credenciais que sustentam resultado e escala.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const InstitutionalClose = () => (
  <section className="overflow-hidden border-t border-stone-800 bg-stone-950 py-20 text-stone-100">
    <motion.div
      className="container mx-auto px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
        <p className="font-sans text-lg font-semibold leading-relaxed text-white md:text-xl">
          Lobo Soluções — a inteligência que entrega resultados e escala.
          <br />
          <span className="text-accent">
            Agentes, consultoria, engenharia e arquitetura com a governança de quem já percorreu o
            caminho.
          </span>
        </p>
      </motion.div>
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <AuraPillLink
          to="/"
          tone="dark"
          variant="secondary"
          className="!normal-case tracking-wide"
        >
          Voltar ao início
        </AuraPillLink>
        <AuraPillLink href="/#contato" tone="dark" variant="primary">
          Fale conosco
        </AuraPillLink>
      </motion.div>
    </motion.div>
  </section>
);

const Metodologia = () => (
  <>
    <PageHero />
    <MaturityPipeline />
    <section className="section-rhythm-paper section-rhythm-paper-from-canvas border-y border-stone-300/60 py-24">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Deep dive
          </span>
          <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Cada fase, em <span className="text-accent">detalhe</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
            Do discovery ao quality gate: entregáveis, guardrails e o papel dos agentes e da IA em cada
            etapa do AI‑DLC — o método operacional do DNA AI-first da Lobo Soluções.{" "}
            <span className="text-stone-500">Abra cada fase para ver a explicação completa.</span>
          </p>
        </motion.div>
        <motion.div
          className="mx-auto flex max-w-4xl flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={staggerContainer}
        >
          {phases.map((phase, i) => (
            <PhaseCard key={i} {...phase} />
          ))}
        </motion.div>
      </div>
    </section>
    <DigitalTwinSection />
    <CompetitiveEdge />
    <GovernanceExperience />
    <InstitutionalClose />
  </>
);

export default Metodologia;
