import { AlertTriangle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      title: "Khó khăn trong việc tạo ý tưởng mới",
      description: "Bạn đang gặp bế tắc trong quá trình sáng tạo?",
    },
    {
      title: "Thiếu phương pháp hiệu quả",
      description: "Các phương pháp hiện tại không mang lại kết quả mong muốn?",
    },
    {
      title: "Áp lực cạnh tranh",
      description: "Đối thủ liên tục đổi mới trong khi bạn đang bị bỏ lại phía sau?",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Bạn đang gặp những thách thức này?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <AlertTriangle className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-primary">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};