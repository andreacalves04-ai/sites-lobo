import { Lightbulb, Boxes, Zap, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    label: "Intent",
    title: "Objetivos como Input Primário",
    description:
      "Objetivos de negócio e técnicos alimentam diretamente a decomposição por IA. Sem briefings vagos — cada ciclo parte de uma intenção clara e mensurável.",
  },
  {
    icon: Boxes,
    step: "02",
    label: "Units",
    title: "Blocos de Valor (DDD)",
    description:
      "A IA sugere unidades de valor baseadas em Domain-Driven Design. Humanos refinam o que exige regulação, integrações sensíveis e decisões de negócio.",
  },
  {
    icon: Zap,
    step: "03",
    label: "Bolts",
    title: "Micro-iterações em Tempo Real",
    description:
      "Design, código e testes coordenados em micro-iterações quase instantâneas. Feedback contínuo substitui sprints longos e entregas tardias.",
  },
];

const AIDLCSection = () => {
  return (
    <section id="ai-dlc" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            DNA AI-first · Lobo Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            AI-DLC:{" "}
            <span className="gradient-text-purple">
              AI Development Lifecycle
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Da intenção de negócio à engenharia em escala — agentes e IA aceleram, consultoria e
            arquitetura definem a trilha; humanos fecham decisões críticas e governança.
          </p>
        </div>

        {/* Stepper */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[72px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Circle */}
                <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 hover:border-accent hover:shadow-[0_0_24px_-4px_hsl(var(--accent)/0.35)]">
                  <item.icon className="w-9 h-9 text-accent" />
                </div>

                {/* Label chip */}
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-3">
                  {item.label}
                </span>

                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight callout */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="relative rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8 flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-1 text-base">
                Domain &amp; Logical Design First
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nada de <em>"coding first"</em>. Exigimos que o design de domínio
                e o design lógico sejam validados <strong>antes de qualquer linha
                de código</strong> — prevenindo dívida técnica desde a origem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDLCSection;
