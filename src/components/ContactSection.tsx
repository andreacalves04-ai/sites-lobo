import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5511910604020";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}.\nE-mail: ${form.email}\n\n${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactCardClass =
    "flashlight-card group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] p-6 shadow-sm transition-[colors,box-shadow] duration-300 hover:border-stone-300 hover:bg-white hover:shadow-md";

  const iconShell = "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1";

  return (
    <section id="contato" className="section-rhythm-paper section-rhythm-contact border-t border-stone-300/60 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Vamos conversar
          </span>
          <h2 className="mb-4 font-sans text-3xl font-semibold tracking-tighter text-stone-900 md:text-4xl">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="mx-auto max-w-xl text-stone-600">
            Quer combinar agentes de IA, consultoria e engenharia com arquitetura sólida? Conte o desafio;
            respondemos com próximos passos claros.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={contactCardClass}>
              <div
                className={cn(
                  iconShell,
                  "relative z-[3] bg-emerald-500/10 ring-emerald-500/20 group-hover:bg-emerald-500/15"
                )}
              >
                <MessageCircle className="h-6 w-6 text-emerald-600" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="relative z-[3]">
                <p className="font-semibold text-stone-900">WhatsApp</p>
                <p className="text-sm text-stone-600">+55 11 91060-4020</p>
              </div>
            </a>

            <a href="tel:+5511910604020" className={contactCardClass}>
              <div
                className={cn(
                  iconShell,
                  "relative z-[3] bg-primary/10 ring-primary/25 group-hover:bg-primary/15"
                )}
              >
                <Phone className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="relative z-[3]">
                <p className="font-semibold text-stone-900">Telefone</p>
                <p className="text-sm text-stone-600">+55 11 91060-4020</p>
              </div>
            </a>

            <a href="mailto:contato@lobofrontal.com.br" className={contactCardClass}>
              <div
                className={cn(
                  iconShell,
                  "relative z-[3] bg-accent/10 ring-accent/25 group-hover:bg-accent/15"
                )}
              >
                <Mail className="h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="relative z-[3]">
                <p className="font-semibold text-stone-900">E-mail</p>
                <p className="text-sm text-stone-600">contato@lobofrontal.com.br</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flashlight-card group space-y-5 overflow-hidden rounded-2xl border border-stone-200 bg-[#fafaf9] p-8 shadow-sm transition-[colors,box-shadow] duration-300 hover:bg-white hover:shadow-md"
          >
            <h3 className="relative z-[3] font-sans text-xl font-semibold tracking-tight text-stone-900">
              Envie sua mensagem
            </h3>
            <p className="relative z-[3] text-sm text-stone-600">O formulário será enviado via WhatsApp.</p>

            <div className="relative z-[3]">
              <label className="mb-1 block text-sm font-medium text-stone-800">Nome</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/15"
                placeholder="Seu nome"
              />
            </div>

            <div className="relative z-[3]">
              <label className="mb-1 block text-sm font-medium text-stone-800">E-mail</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/15"
                placeholder="seu@email.com"
              />
            </div>

            <div className="relative z-[3]">
              <label className="mb-1 block text-sm font-medium text-stone-800">Mensagem</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/15"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <button
              type="submit"
              className={cn(
                "relative z-[3] inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-800 bg-stone-950 px-6 py-3.5 text-sm font-semibold text-white",
                "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_4px_16px_-2px_rgba(0,0,0,0.25)]",
                "transition-all duration-300 ease-aura-out hover:bg-stone-900 active:scale-[0.98]"
              )}
            >
              <Send className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
              {sent ? "Abrindo WhatsApp…" : "Enviar via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
