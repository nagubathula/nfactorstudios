import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ScrollGallery from "@/components/ScrollGallery";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTable from "@/components/ExperienceTable";
import CareerTimeline from "@/components/CareerTimeline";
import Hours from "@/components/Hours";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        {/* <Services />
        <ScrollGallery /> */}
        {/* <Features /> */}
        <ProjectShowcase />
        {/* <ExperienceTable /> */}
<CareerTimeline />
<Hours />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
