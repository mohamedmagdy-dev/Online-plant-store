// Components
import HeroSection from "../components/HeroSection";
import BenefitSection from "../components/BenefitSection";
import BestSellerSection from "../components/BestSellerSection";
import PlantReferenceSection from "../components/PlantReferenceSection";
import PlantsCareSection from "../components/PlantsCareSection";

//react
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleHeaderTheme } from "../features/theme/themeSlice";

export default function Home() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(toggleHeaderTheme(true));
  }, [dispatch]);  return (
    <main>
      <HeroSection />
      <BenefitSection />
      <BestSellerSection />
      <PlantReferenceSection />
      <PlantsCareSection />
    </main>
  );
}
