// Components
import HeroSection from "../components/HeroSection";
import BenefitSection from "../components/BenefitSection";
import BestSellerSection from "../components/BestSellerSection";
import PlantReferenceSection from "../components/PlantReferenceSection";
import PlantsCareSection from "../components/PlantsCareSection";

export default function Home({setHeaderTheme}) {
  setHeaderTheme("dark");
  return (
    <main>
      <HeroSection />
      <BenefitSection />
      <BestSellerSection />
      <PlantReferenceSection />
      <PlantsCareSection />
    </main>
  );
}
