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
import DesignPrinciples from "@/components/DesignPrinciples";
import StickyFooter from "@/components/StickyFooter";

export default function Home() {
  return (
    <div className="">
    
      <main className="content bg-white flex flex-col justify-between rounded-3xl">
        <Hero />

        <ProjectShowcase />
     
        <CareerTimeline />
        <Hours />
        <DesignPrinciples />
       
      </main>
      <StickyFooter />
     
        
    

    </div>
  );
}
