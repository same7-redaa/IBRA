import Hero from "@/components/home/Hero";
import HomeProductCarousels from "@/components/home/HomeProductCarousels";
import HoneyFeatures from "@/components/home/HoneyFeatures";
import Newsletter from "@/components/home/Newsletter";
import SocialConnect from "@/components/home/SocialConnect";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-[#fbf7ee]">
      <Hero />
      <HomeProductCarousels />
      <HoneyFeatures />
      <Newsletter />
      <SocialConnect />
    </main>
  );
}

