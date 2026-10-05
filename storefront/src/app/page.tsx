import Hero from "@/components/home/Hero";
import BestProducts from "@/components/home/BestProducts";
import Newsletter from "@/components/home/Newsletter";
import SocialConnect from "@/components/home/SocialConnect";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-[#fbf7ee]">
      <Hero />
      <BestProducts />
      <Newsletter />
      <SocialConnect />
    </main>
  );
}
