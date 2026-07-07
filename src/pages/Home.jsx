// Components
import HeroSection from "../components/HeroSection";
import BenefitSection from "../components/BenefitSection";
import BestSellerSection from "../components/BestSellerSection";
import PlantReferenceSection from "../components/PlantReferenceSection";
import PlantsCareSection from "../components/PlantsCareSection";

//react
import { useEffect } from "react";

export default function Home({setIsHeaderTransparent}) {
  useEffect(() => {
    setIsHeaderTransparent(true);
  }, []);  return (
    <main>
      <HeroSection />
      <BenefitSection />
      <BestSellerSection />
      <PlantReferenceSection />
      <PlantsCareSection />
    </main>
  );
}
