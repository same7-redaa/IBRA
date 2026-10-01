import Hero from "@/components/home/Hero";
import BestProducts from "@/components/home/BestProducts";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col min-h-screen bg-deep-black">
      <Hero />
      <BestProducts />
      <Newsletter />
    </main>
  );
}
