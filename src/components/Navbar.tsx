import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-lobo.png";

type NavItem =
  | { kind: "hash"; href: string; label: string }
  | { kind: "route"; to: string; label: string };

const navItems: NavItem[] = [
  { kind: "hash", href: "#quem-somos", label: "Quem Somos" },
  { kind: "hash", href: "#servicos", label: "Serviços" },
  { kind: "route", to: "/metodologia", label: "Metodologia" },
  { kind: "hash", href: "#metodologias", label: "Como entregamos" },
  { kind: "hash", href: "#lideranca", label: "Liderança" },
  { kind: "hash", href: "#produto", label: "Produtos" },
  // { kind: "hash", href: "#cases", label: "Cases" },
];

const desktopLinkClass =
  "text-sm font-medium text-stone-600 transition-colors hover:text-stone-900";
const mobileLinkClass =
  "text-sm font-medium text-stone-600 transition-colors hover:text-stone-900";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-300/80 bg-[#ebebe3]/95 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-stone-900"
          >
            <img src={logo} alt="Lobo Soluções" className="h-10 w-10 md:h-12 md:w-12" />
            <span className="hidden font-sans text-sm font-semibold uppercase tracking-[0.1em] sm:block md:text-base">
              Lobo Soluções
            </span>
          </Link>

          <div className="hidden items-center gap-5 text-stone-900 lg:flex xl:gap-7">
            {navItems.map((item) =>
              item.kind === "route" ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className={desktopLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className={desktopLinkClass}
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="#contato"
              onClick={(e) => handleHashClick(e, "#contato")}
              className="rounded-full border border-stone-800 bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] transition-all duration-300 ease-aura-out hover:bg-stone-900"
            >
              Contato
            </a>
          </div>

          <button
            type="button"
            className="text-stone-900 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-2 border-t border-stone-300 bg-[#ebebe3]/98 pb-6 pt-4 backdrop-blur-md lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={mobileLinkClass}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleHashClick(e, item.href)}
                    className={mobileLinkClass}
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="#contato"
                onClick={(e) => handleHashClick(e, "#contato")}
                className="mt-1 inline-flex w-fit items-center justify-center rounded-full border border-stone-800 bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
