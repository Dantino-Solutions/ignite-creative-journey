import { ZenBolsterHeroSection } from "@/components/ZenBolsterHeroSection";
import { ZenBolsterProblemSection } from "@/components/ZenBolsterProblemSection";
import { ZenBolsterSolutionSection } from "@/components/ZenBolsterSolutionSection";
import { ZenBolsterHowItWorksSection } from "@/components/ZenBolsterHowItWorksSection";
import { ZenBolsterBenefitsSection } from "@/components/ZenBolsterBenefitsSection";
import { ZenBolsterCTASection } from "@/components/ZenBolsterCTASection";

const ZenBolsterLandingPage = () => {
  return (
    <div className="min-h-screen">
      <ZenBolsterHeroSection />
      <ZenBolsterProblemSection />
      <ZenBolsterSolutionSection />
      <ZenBolsterHowItWorksSection />
      <ZenBolsterBenefitsSection />
      <ZenBolsterCTASection />
    </div>
  );
};

export default ZenBolsterLandingPage;
