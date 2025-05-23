import { Button } from "@/components/ui/button";

export const ZenBolsterHeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-20">
      <div className="container max-w-6xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Experience Deep, Restorative Sleep with Zen Bolster, Your Smart Sleep Companion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          The intelligent body bolster that actively improves your sleep, tracks your patterns, and provides AI-driven advice for truly personalized rest.
        </p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
          Discover Zen Bolster
        </Button>
      </div>
    </section>
  );
};
