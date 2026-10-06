import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import StatsSection from "@/components/home/StatsSection";
import Newsletter from "@/components/home/Newsletter";
import SocialConnect from "@/components/home/SocialConnect";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <Newsletter />
      <SocialConnect />
    </main>
  );
}

