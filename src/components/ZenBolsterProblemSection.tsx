import { Moon, Clock, BarChart2 } from "lucide-react";

export const ZenBolsterProblemSection = () => {
  const problems = [
    {
      title: "Difficulty Falling & Staying Asleep",
      description: "Tossing and turning, struggling to quiet your mind, or waking up multiple times a night?",
      icon: <Moon className="w-12 h-12 text-blue-500 mb-4" />,
    },
    {
      title: "Waking Up Groggy & Unrefreshed",
      description: "Starting your day feeling like you haven't slept at all, lacking energy and focus?",
      icon: <Clock className="w-12 h-12 text-blue-500 mb-4" />,
    },
    {
      title: "Unsure How to Improve Your Sleep?",
      description: "Confused about your sleep patterns and what steps to take for a more restful night?",
      icon: <BarChart2 className="w-12 h-12 text-blue-500 mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Tired of Restless Nights?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {problem.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
