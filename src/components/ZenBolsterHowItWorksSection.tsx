import { Bed, Activity, Smartphone, Brain } from "lucide-react"; // Example icons

export const ZenBolsterHowItWorksSection = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Embrace Comfort",
      description: "Simply place Zen Bolster in your bed and sleep comfortably. Its ergonomic design supports your body naturally.",
      icon: <Bed className="w-10 h-10 text-blue-600 mb-3" />, // Placeholder for icon
    },
    {
      stepNumber: 2,
      title: "Effortless Tracking",
      description: "While you sleep, Zen Bolster discreetly tracks your sleep patterns, cycles, and disturbances.",
      icon: <Activity className="w-10 h-10 text-blue-600 mb-3" />, // Placeholder for icon
    },
    {
      stepNumber: 3,
      title: "Unlock Insights",
      description: "In the morning, view your personalized sleep report in the Zen Bolster app.",
      icon: <Smartphone className="w-10 h-10 text-blue-600 mb-3" />, // Placeholder for icon
    },
    {
      stepNumber: 4,
      title: "Improve with AI",
      description: "Receive AI-driven advice and tips to optimize your sleep habits for better nights and energized days.",
      icon: <Brain className="w-10 h-10 text-blue-600 mb-3" />, // Placeholder for icon
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Simple Steps to Rejuvenating Sleep
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon Placeholder */}
              <div className="p-3 rounded-full bg-blue-100 mb-4">
                {step.icon}
              </div>
              <div className="mb-3">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Step {step.stepNumber}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-700">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
