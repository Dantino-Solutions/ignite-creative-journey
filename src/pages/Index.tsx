import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { PlanSection } from "@/components/PlanSection";
import { SuccessSection } from "@/components/SuccessSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PlanSection />
      <SuccessSection />
    </div>
  );
};

export default Index;