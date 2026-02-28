import { HeroSection } from "../components/home/HeroSection";
import { HighlightsSection } from "../components/home/HighlightsSection";
import { PrincipalSection } from "../components/home/PrincipalSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import { FacilitiesSection } from "../components/home/FacilitiesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTASection } from "../components/home/CTASection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <PrincipalSection />
      <WhyChooseUsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
