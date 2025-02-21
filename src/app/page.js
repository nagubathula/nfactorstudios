import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        <Services />
        <Features />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  
      </footer>
    </div>
  );
}
