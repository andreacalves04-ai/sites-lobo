import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AuraTone = "dark" | "light";
type AuraVariant = "primary" | "secondary";

const styles: Record<AuraTone, Record<AuraVariant, string>> = {
  dark: {
    primary:
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/25 bg-black/45 px-7 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_6px_28px_-6px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-aura-out hover:border-white/45 hover:bg-black/58 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_36px_-8px_rgba(0,0,0,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    secondary:
      "group inline-flex items-center justify-center gap-2 rounded-full border border-white bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 ease-aura-out hover:border-white hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  },
  light: {
    primary:
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-stone-800 bg-stone-950 px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_4px_16px_-2px_rgba(0,0,0,0.35)] transition-all duration-300 ease-aura-out hover:border-stone-700 hover:bg-stone-900 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_6px_24px_-4px_rgba(0,0,0,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ebebe3]",
    secondary:
      "group inline-flex items-center justify-center gap-2 rounded-full border border-stone-900 bg-transparent px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-stone-900 transition-all duration-300 ease-aura-out hover:border-stone-900 hover:bg-stone-900/[0.05] hover:shadow-[0_0_0_1px_rgba(28,25,23,0.2)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ebebe3]",
  },
};

type AuraPillLinkProps = {
  /** âncora na mesma página */
  href?: string;
  /** rota interna (React Router) */
  to?: string;
  children: ReactNode;
  tone?: AuraTone;
  variant?: AuraVariant;
  className?: string;
  showArrow?: boolean;
};

export function AuraPillLink({
  href,
  to,
  children,
  tone = "dark",
  variant = "primary",
  className,
  showArrow = true,
}: AuraPillLinkProps) {
  const arrowColor =
    tone === "dark" || (tone === "light" && variant === "primary")
      ? "text-white"
      : "text-current";

  const merged = cn(styles[tone][variant], className);

  const arrow = showArrow ? (
    <ArrowRight
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-300 ease-aura-out group-hover:translate-x-0.5 group-hover:-translate-y-px",
        arrowColor
      )}
      strokeWidth={2}
      aria-hidden
    />
  ) : null;

  const content = (
    <>
      {children}
      {arrow}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={merged}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href ?? "#"} className={merged}>
      {content}
    </a>
  );
}
