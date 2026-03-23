import { Building2, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import caseFitpro from "@/assets/case-fitpro.jpg";
import caseJangadeiro from "@/assets/case-jangadeiro.jpg";

const sectors = [
  {
    icon: Landmark,
    iconClass: "text-sky-400",
    title: "Setor público",
    description:
      "Modernização e eficiência em órgãos como SEFAZ, tribunais de justiça e DETRANs.",
    clients: ["SEFAZ-CE", "DETRAN-ES", "DETRAN-AM", "SEDUC-AM", "Tribunais de Justiça"],
  },
  {
    icon: Building2,
    iconClass: "text-emerald-400",
    title: "Setor privado",
    description:
      "Soluções de alta disponibilidade para operadoras de saúde, indústria alimentícia e redes farmacêuticas.",
    clients: ["Unimed", "Hapvida", "M. Dias Branco", "Pague Menos"],
  },
];

const projects = [
  {
    image: caseFitpro,
    title: "FitPro App",
    description:
      "Sistema completo de gestão para academias com fichas de treino, grupos musculares e acompanhamento de alunos.",
    stack: ["ASP.NET", "AngularJS", "JavaScript"],
  },
  {
    image: caseJangadeiro,
    title: "Jangadeiro Têxtil",
    description:
      "Aplicativo mobile para conferência técnica de tecidos com filtros por variante, filial e visualização de produtos.",
    stack: ["React Native", "Node.js"],
  },
];

function SectorIcon({ icon: Icon, iconClass }: { icon: typeof Landmark; iconClass: string }) {
  return (
    <div
      className={cn(
        "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-white/10"
      )}
    >
      <Icon className={cn("h-7 w-7", iconClass)} strokeWidth={1.75} aria-hidden />
    </div>
  );
}

const CasesSection = () => {
  return (
    <section id="cases" className="section-rhythm-canvas border-y border-stone-300/60 py-24">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Resultados comprovados
          </span>
          <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Cases de <span className="text-accent">sucesso</span>
          </h2>
          <p className="mx-auto max-w-2xl text-stone-600">
            Engenharia e arquitetura da Lobo Soluções em produção: consultoria, software e operação com
            impacto mensurável e escala.
          </p>
        </div>

        <div className="mx-auto mb-20 grid max-w-4xl gap-8 md:grid-cols-2">
          {sectors.map((item) => (
            <div
              key={item.title}
              className="flashlight-card group rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
            >
              <div className="relative z-[3]">
                <SectorIcon icon={item.icon} iconClass={item.iconClass} />
                <h3 className="mb-3 font-sans text-2xl font-semibold tracking-tight text-stone-900">{item.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-stone-600">{item.description}</p>
                <ul className="flex flex-wrap gap-2">
                {item.clients.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-stone-600"
                  >
                    {c}
                  </li>
                ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flashlight-card group overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
            >
              <div className="relative z-[3] overflow-hidden border-b border-stone-200">
                <img
                  src={project.image}
                  alt=""
                  className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="relative z-[3] p-6">
                <h3 className="mb-2 font-sans text-xl font-semibold tracking-tight text-stone-900">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-stone-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-mono text-[10px] font-medium text-stone-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
