import { CheckCircle } from "lucide-react"; // Or any other relevant icon

export const ZenBolsterSolutionSection = () => {
  const features = [
    {
      title: "Smart Bolster Design",
      description: "Ergonomically designed for maximum comfort and support, adapting to your body.",
      // Placeholder for image/icon: <img src="/path/to/smart-design-icon.svg" alt="Smart Bolster Design" />
    },
    {
      title: "Advanced Sleep Tracking",
      description: "Accurately monitors your sleep stages, movements, and duration, providing comprehensive insights.",
      // Placeholder for image/icon: <img src="/path/to/sleep-tracking-icon.svg" alt="Advanced Sleep Tracking" />
    },
    {
      title: "AI-Powered Sleep Coach",
      description: "Receive personalized advice and actionable recommendations based on your unique sleep data to continuously improve your rest.",
      // Placeholder for image/icon: <img src="/path/to/ai-coach-icon.svg" alt="AI-Powered Sleep Coach" />
    },
    {
      title: "Premium Materials & Comfort",
      description: "Crafted with hypoallergenic, breathable materials for a cool and comfortable night's sleep.",
      // Placeholder for image/icon: <img src="/path/to/premium-materials-icon.svg" alt="Premium Materials & Comfort" />
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Zen Bolster: Your Personalized Path to Better Sleep
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon placeholder - you can replace this with an actual icon or image */}
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" /> 
                <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
              </div>
              {/* Placeholder for image/icon for the feature - could be above title or next to it */}
              {/* For example: <div className="mb-4"> [Image/Icon Here] </div> */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Optional: A general image or graphic could be placed here, perhaps next to the grid or below it */}
        {/* <div className="mt-12"> <img src="/path/to/zen-bolster-lifestyle.jpg" alt="Zen Bolster in use" className="rounded-lg shadow-xl" /> </div> */}
      </div>
    </section>
  );
};
