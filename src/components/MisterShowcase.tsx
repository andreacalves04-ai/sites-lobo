import { Database, Bot, LineChart, Brain, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import misterPartidas from "@/assets/mister-partidas.png";
import misterTatica from "@/assets/mister-tatica.png";
import misterCampeonatos from "@/assets/mister-campeonatos.png";
import misterMatriz from "@/assets/mister-matriz.png";
import misterChat from "@/assets/mister-chat.png";

const stats = [
  { value: "2M+", label: "Dados analisados por dia", accent: "text-primary" },
  { value: "18", label: "Agentes de IA ativos 24h", accent: "text-accent" },
  { value: "50+", label: "Ligas monitoradas", accent: "text-sky-600" },
  { value: "99.2%", label: "Precisão anti-alucinação", accent: "text-emerald-600" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

function IconBadge({
  icon: Icon,
  iconClass,
  label,
}: {
  icon: typeof Database;
  iconClass: string;
  label: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ring-1 ring-stone-700/60"
        )}
      >
        <Icon className={cn("h-5 w-5", iconClass)} strokeWidth={1.75} aria-hidden />
      </div>
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
        {label}
      </span>
    </div>
  );
}

function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-stone-600">
      {children}
    </span>
  );
}

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flashlight-card group relative overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-stone-200/80 transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.14)]">
      <img
        src={src}
        alt={alt}
        className="relative z-[3] w-full transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

const MisterShowcase = () => {
  return (
    <section
      id="produto"
      className="section-rhythm-paper section-rhythm-paper-from-dark border-y border-stone-300/60 py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
              Produto principal
            </span>
            <h2 className="mb-6 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl lg:text-5xl">
              Aposta do <span className="text-accent">Mister IA</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light text-stone-600 md:text-xl">
              Dados geram <span className="font-semibold text-stone-900">confiança</span> e sustentam{" "}
              <span className="font-semibold text-stone-900">resultados em escala</span> quando agentes,
              consultoria e engenharia conversam na mesma arquitetura.
            </p>
          </motion.div>

          <motion.div
            className="mb-24 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                className="flashlight-card group rounded-2xl border border-stone-200 bg-[#fafaf9] p-5 text-center shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md md:p-6"
              >
                <div className={cn("relative z-[3] mb-2 font-sans text-2xl font-bold md:text-3xl", stat.accent)}>
                  {stat.value}
                </div>
                <p className="relative z-[3] text-xs text-stone-600 md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mb-24 grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div custom={0} variants={fadeUp}>
              <IconBadge icon={Database} iconClass="text-accent" label="Datalake inteligente" />
              <h3 className="mb-4 font-sans text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                Mais de 2 milhões de informações analisadas
              </h3>
              <p className="mb-6 leading-relaxed text-stone-600">
                Criamos um datalake de informações críticas e constantemente atualizadas. Estatísticas por
                time dos últimos 5, 10 e 20 jogos alimentam nossos modelos com contexto profundo para cada
                partida.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Estatísticas históricas", "Dados em tempo real", "Banco vetorial"].map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <ImageFrame
                src={misterCampeonatos}
                alt="Painel de campeonatos com classificação e radar de comparação"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-24 grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div custom={0} variants={fadeUp} className="order-2 lg:order-1">
              <ImageFrame
                src={misterPartidas}
                alt="Lista de partidas com odds e informações detalhadas"
              />
            </motion.div>
            <motion.div custom={1} variants={fadeUp} className="order-1 lg:order-2">
              <IconBadge icon={Bot} iconClass="text-primary" label="Rede de agentes" />
              <h3 className="mb-4 font-sans text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                18 agentes trabalhando 24h por dia
              </h3>
              <p className="mb-6 leading-relaxed text-stone-600">
                Uma rede de agentes especializados recupera e analisa notícias que impactam partidas,
                monitora lesões, suspensões e mudanças táticas em tempo real, gerando insights antes que o
                mercado reaja.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Monitoramento 24/7", "Análise de notícias", "Agentes especializados"].map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-24 grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div custom={0} variants={fadeUp}>
              <IconBadge icon={LineChart} iconClass="text-sky-400" label="Microanálise" />
              <h3 className="mb-4 font-sans text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                Agentes especializados por mercado
              </h3>
              <p className="mb-6 leading-relaxed text-stone-600">
                Cada mercado (Over/Under, Handicap Asiático, Resultado Final) possui agentes dedicados que
                fazem microanálise de cada detalhe. Outros agentes validam as análises para eliminar
                alucinações e garantir consistência.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Anti-alucinação", "Validação cruzada", "Mercados específicos"].map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <ImageFrame src={misterMatriz} alt="Matriz Over/Under com análise de gols por time" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-24 grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div custom={0} variants={fadeUp} className="order-2 lg:order-1">
              <ImageFrame src={misterTatica} alt="Configuração de táticas e filtros personalizados" />
            </motion.div>
            <motion.div custom={1} variants={fadeUp} className="order-1 lg:order-2">
              <IconBadge icon={Layers} iconClass="text-emerald-400" label="Pesquisa semântica" />
              <h3 className="mb-4 font-sans text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                Banco vetorial para inteligência contextual
              </h3>
              <p className="mb-6 leading-relaxed text-stone-600">
                Utilizamos banco vetorial para pesquisa semântica de informações, permitindo que o sistema
                cruze dados históricos, notícias e estatísticas de forma inteligente, encontrando padrões
                invisíveis a olho nu.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Pinecone", "Embeddings", "Busca semântica"].map((tag) => (
                  <TagPill key={tag}>{tag}</TagPill>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div custom={0} variants={fadeUp}>
              <IconBadge icon={Brain} iconClass="text-violet-400" label="Chat com Mister" />
              <h3 className="mb-4 font-sans text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
                Converse diretamente com a IA
              </h3>
              <p className="leading-relaxed text-stone-600">
                O Chat com Mister permite análises personalizadas por partida. Pergunte sobre qualquer jogo e
                receba insights fundamentados em dados reais, sem achismos.
              </p>
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <ImageFrame src={misterChat} alt="Chat com Mister para análises personalizadas" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisterShowcase;
