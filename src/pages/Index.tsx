import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

import AIDLCOperatingSystem from "@/components/AIDLCOperatingSystem";
import MisterShowcase from "@/components/MisterShowcase";
import LeadershipSection from "@/components/LeadershipSection";

import ClientsSection from "@/components/ClientsSection";
// import CasesSection from "@/components/CasesSection";
import MethodologiesSection from "@/components/MethodologiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />

      <AIDLCOperatingSystem />
      <MisterShowcase />
      <LeadershipSection />

      <ClientsSection />
      {/* <CasesSection /> — Resultados comprovados */}
      <MethodologiesSection />
      <ContactSection />
    </>
  );
};

export default Index;
