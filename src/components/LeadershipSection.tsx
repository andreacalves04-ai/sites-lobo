import { Award, Cpu, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import iconOracle from "@/assets/icon-oracle.png";
import iconAws from "@/assets/icon-aws.png";
import iconSqlServer from "@/assets/icon-sqlserver.png";
import iconPinecone from "@/assets/icon-pinecone.png";
import iconDotnet from "@/assets/icon-dotnet.png";
import iconVue from "@/assets/icon-vue.png";
import iconN8n from "@/assets/icon-n8n.png";
import iconNode from "@/assets/icon-nodejs-new.png";
import iconReact from "@/assets/icon-react.png";
import iconAzure from "@/assets/icon-azure.png";
import iconGithub from "@/assets/icon-github.png";
import iconWordpress from "@/assets/icon-wordpress.png";
import iconSpring from "@/assets/icon-spring.png";
import iconJs from "@/assets/icon-js.png";
import iconFlutter from "@/assets/icon-flutter.png";
import iconGcloud from "@/assets/icon-gcloud.png";

function ExecIcon({ icon: Icon, iconClass }: { icon: typeof Award; iconClass: string }) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-stone-700/60"
      )}
    >
      <Icon className={cn("h-7 w-7", iconClass)} strokeWidth={1.75} aria-hidden />
    </div>
  );
}

function CredPill({ children, variant }: { children: string; variant: "gold" | "accent" }) {
  return (
    <span
      className={cn(
        "rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider",
        variant === "gold"
          ? "border-stone-800/20 bg-stone-900 text-primary"
          : "border-accent/25 bg-accent/10 text-accent"
      )}
    >
      {children}
    </span>
  );
}

const LeadershipSection = () => {
  return (
    <section
      id="lideranca"
      className="section-rhythm-canvas border-y border-stone-300/60 py-24"
    >
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Experiência que gera confiança
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Liderança e <span className="text-primary">operação</span>
          </h2>
        </div>

        <div className="mx-auto mb-10 grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="flashlight-card group flex flex-col rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md">
            <div className="relative z-[3] mb-5 flex items-center gap-4">
              <ExecIcon icon={Award} iconClass="text-primary" />
              <div>
                <h3 className="font-sans text-xl font-semibold tracking-tight text-stone-900">
                  André Castro Alves
                </h3>
                <p className="text-sm font-medium text-accent">CEO · Estratégia e projetos</p>
              </div>
            </div>
            <p className="relative z-[3] mb-6 text-sm leading-relaxed text-stone-600">
              <span className="font-semibold text-stone-900">Especialista em gestão de projetos</span> com 25+ anos de
              experiência e sólida formação em engenharia de software e telemática. Liderou por 15 anos projetos
              críticos em consultorias de grande porte nos setores de saúde, indústria, varejo e setor público (fazenda,
              trânsito e educação).
            </p>
            <div className="relative z-[3] mt-auto flex flex-wrap gap-2">
              {["PMP", "CSM", "SAFe6", "ITIL", "Azure"].map((badge) => (
                <CredPill key={badge} variant="gold">
                  {badge}
                </CredPill>
              ))}
            </div>
          </div>

          <div className="flashlight-card group flex flex-col rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md">
            <div className="relative z-[3] mb-5 flex items-center gap-4">
              <ExecIcon icon={Cpu} iconClass="text-accent" />
              <div>
                <h3 className="font-sans text-xl font-semibold tracking-tight text-stone-900">Matheus Veras</h3>
                <p className="text-sm font-medium text-accent">CTO · Arquitetura e IA</p>
              </div>
            </div>
            <p className="relative z-[3] mb-6 text-sm leading-relaxed text-stone-600">
              Arquiteto de software com 20+ anos de experiência e especialista em{" "}
              <span className="font-semibold text-stone-900">IA aplicada e agentes de IA</span>. Lidera a frente
              tecnológica com foco em plataformas agênticas e arquiteturas complexas, levando inovação a{" "}
              <span className="font-semibold text-stone-900">resultados e escala</span> com governança.
            </p>
            <div className="relative z-[3] mt-auto flex flex-wrap gap-2">
              {["AI-DLC", "Arquitetura de agentes", "Sistemas distribuídos"].map((tag) => (
                <CredPill key={tag} variant="accent">
                  {tag}
                </CredPill>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="flashlight-card group rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md md:p-10">
            <div className="relative z-[3] mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 to-stone-950 ring-1 ring-stone-700/50"
                )}
              >
                <Users className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="font-sans text-lg font-semibold tracking-tight text-stone-900 md:text-xl">
                Time de consultores especialistas em{" "}
                <span className="text-accent">tecnologias como</span>
              </h3>
            </div>

            <div className="relative z-[3] grid grid-cols-2 items-center justify-items-start gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                { name: "Java", icon: "☕" },
                { name: ".NET", img: iconDotnet },
                { name: "JavaScript", img: iconJs },
                { name: "Node.js", img: iconNode },
                { name: "Flutter", img: iconFlutter },
                { name: "React", img: iconReact },
                { name: "Angular", icon: "🅰" },
                { name: "Vue.js", img: iconVue },
                { name: "WordPress", img: iconWordpress },
                { name: "Spring", img: iconSpring },
                { name: "Docker", icon: "🐳" },
                { name: "AWS", img: iconAws },
                { name: "GitHub Actions", img: iconGithub },
                { name: "Google Cloud", img: iconGcloud },
                { name: "Azure", img: iconAzure },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Oracle", img: iconOracle },
                { name: "SQL Server", img: iconSqlServer },
                { name: "Pinecone", img: iconPinecone },
                { name: "N8N", img: iconN8n },
                { name: "LangChain", icon: "🔗" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex w-full items-center gap-2 rounded-lg border border-transparent px-2 py-2 text-stone-600 transition-colors hover:border-stone-200 hover:bg-stone-50 hover:text-stone-900"
                >
                  {"img" in tech && tech.img ? (
                    <img src={tech.img} alt="" className="h-5 w-5 object-contain" />
                  ) : (
                    <span className="text-lg" aria-hidden>
                      {"icon" in tech ? tech.icon : ""}
                    </span>
                  )}
                  <span className="whitespace-nowrap text-xs font-medium">{tech.name}</span>
                </div>
              ))}
            </div>

            <p className="relative z-[3] mt-6 text-center text-sm text-stone-600">
              +20 especialistas seniores · squads focados em entrega contínua, governança técnica e inovação aplicada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
