import { Check } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    "Phương pháp SIT đã được chứng minh hiệu quả toàn cầu",
    "Đội ngũ giảng viên giàu kinh nghiệm",
    "Chương trình thực tiễn, dễ áp dụng",
    "Tích hợp công nghệ AI hiện đại",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Giải pháp của chúng tôi
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              SIT - Systematic Inventive Thinking
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-secondary mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-accent p-8 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Collaborative learning environment"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};