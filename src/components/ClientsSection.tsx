import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import clientMariaEster from "@/assets/client-maria-ester.png";
import clientAcademe from "@/assets/client-academe.jpg";
import clientMaisHidro from "@/assets/client-mais-hidro.jpg";
import clientBombasKing from "@/assets/client-bombas-king.png";
import clientFortplastic from "@/assets/client-fortplastic.png";

const clients = [
  { name: "Colégio Maria Ester", logo: clientMariaEster },
  { name: "Academe Educação", logo: clientAcademe },
  { name: "Mais Hidro Soluções", logo: clientMaisHidro },
  { name: "Bombas King", logo: clientBombasKing },
  { name: "Fort Plastic", logo: clientFortplastic },
];

const ClientsSection = () => {
  return (
    <section className="section-rhythm-paper section-rhythm-paper-from-canvas border-y border-stone-300/60 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Clientes
          </span>
          <h2 className="font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Quem confia na <span className="text-primary">Lobo Soluções</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
            Parcerias em que consultoria, engenharia, arquitetura e agentes de IA caminham juntos: resultado
            e escala com responsabilidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}>
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.name} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flashlight-card group mx-2 flex h-40 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] p-6 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md">
                    <div className="relative z-[3] flex max-h-16 min-h-[3rem] w-full flex-1 items-center justify-center overflow-hidden">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-16 max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <span className="relative z-[3] text-center text-xs font-medium leading-tight text-stone-600">
                      {client.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
