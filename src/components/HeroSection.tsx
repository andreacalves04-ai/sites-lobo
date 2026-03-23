import { useState } from "react";
import heroPoster from "@/assets/hero-tech-light.png";
import { AuraPillLink } from "@/components/AuraPillLink";
import { cn } from "@/lib/utils";

const badges = ["Agentes de IA", "Consultoria", "Engenharia", "Arquitetura"];

/** Coloca o ficheiro em `public/hero-bg.mp4` (URL no browser: `/hero-bg.mp4`). */
const HERO_VIDEO_SRC = "/hero-bg.mp4";

const HeroSection = () => {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="quem-somos"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Camada base: imagem + parallax (sempre); coberta pelo vídeo quando este corre. */}
        <img
          src={heroPoster}
          alt=""
          className="parallax-img absolute left-0 top-[-6%] z-0 h-[112%] w-full object-cover object-left"
          data-speed="0.12"
          decoding="async"
          aria-hidden
        />
        {/* Vídeo: muted + playsInline obrigatórios para autoplay (especialmente iOS). */}
        <video
          className={cn(
            "absolute left-1/2 top-1/2 z-[1] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-left motion-reduce:hidden",
            videoFailed && "hidden"
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/85 to-white/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-white/80 via-transparent to-white/40"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6 pb-16 pt-10 md:pb-24 md:pt-14 lg:pt-16">
        <div className="max-w-3xl reveal active">
          <p className="hero-badge mb-6 text-[10px] font-semibold uppercase tracking-[0.38em] text-stone-600 md:mb-8 md:text-[11px]">
            Lobo Soluções · DNA AI-first
          </p>

          <h1
            id="hero-title"
            className="mb-6 font-sans text-balance text-[clamp(2.25rem,6vw,4.25rem)] font-bold leading-[1.06] tracking-tight text-stone-950 md:mb-8"
          >
            A inteligência que entrega
            <br />
            resultados e escala
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-stone-600 md:mb-12 md:text-lg">
            Na Lobo, IA não é tendência de slide: é o DNA do jeito de trabalhar. Combinamos agentes,
            consultoria e engenharia com arquitetura sólida para levar do experimento à operação com
            governança, velocidade e impacto mensurável.
          </p>

          <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
            <AuraPillLink href="#contato" tone="light" variant="primary">
              Fale conosco
            </AuraPillLink>
            <AuraPillLink href="#servicos" tone="light" variant="secondary">
              Explorar serviços
            </AuraPillLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 md:mt-16">
            {badges.map((label) => (
              <span
                key={label}
                className="rounded-full border border-stone-300 bg-white/60 px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-stone-700 shadow-sm backdrop-blur-sm transition-colors duration-300 ease-aura-out hover:border-stone-400 hover:bg-white"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
