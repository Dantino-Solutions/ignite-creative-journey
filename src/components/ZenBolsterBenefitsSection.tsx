import { Moon, Sun, Brain, TrendingUp } from "lucide-react"; // Example icons

export const ZenBolsterBenefitsSection = () => {
  const benefits = [
    {
      title: "Deeper, More Restful Sleep",
      description: "Fall asleep faster and enjoy uninterrupted sleep cycles, leading to truly restorative rest.",
      icon: <Moon className="w-10 h-10 text-green-500 mb-4" />, // Icon placeholder
    },
    {
      title: "Energized Days",
      description: "Wake up feeling refreshed, revitalized, and ready to take on your day with increased focus and productivity.",
      icon: <Sun className="w-10 h-10 text-green-500 mb-4" />, // Icon placeholder
    },
    {
      title: "Understand Your Sleep DNA",
      description: "Gain valuable insights into your unique sleep patterns and learn what affects your sleep quality.",
      icon: <Brain className="w-10 h-10 text-green-500 mb-4" />, // Icon placeholder
    },
    {
      title: "Personalized Sleep Evolution",
      description: "Continuously improve your sleep habits with tailored AI recommendations that adapt to your progress.",
      icon: <TrendingUp className="w-10 h-10 text-green-500 mb-4" />, // Icon placeholder
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Wake Up to a Better You: The Zen Bolster Advantage
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              {/* Icon Placeholder - Render the icon component here */}
              {benefit.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
