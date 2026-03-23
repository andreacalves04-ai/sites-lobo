import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Shell global alinhado ao boilerplate Aura:
 * trilhos verticais (border-x), canvas #ebebe3, header + main + footer.
 */
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-stone-400/30">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col border-x border-stone-300 bg-[#ebebe3]">
        <Navbar />
        <main id="conteudo-principal" className="w-full flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
