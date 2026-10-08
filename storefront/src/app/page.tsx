import Hero from "@/components/home/Hero";
import ClientsTickerSection from "@/components/home/ClientsTickerSection";
import ServicesSection from "@/components/home/ServicesSection";
import FoldersPortfolioSection from "@/components/home/FoldersPortfolioSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import StatsSection from "@/components/home/StatsSection";
import Newsletter from "@/components/home/Newsletter";
import SocialConnect from "@/components/home/SocialConnect";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col min-h-screen">
      <Hero />
      <ClientsTickerSection />
      <ServicesSection />
      <FoldersPortfolioSection />
      <PortfolioSection />
      <CertificatesSection />
      <StatsSection />
      <Newsletter />
      <SocialConnect />
    </main>
  );
}

