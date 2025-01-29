import { Star } from "lucide-react";

export const SuccessSection = () => {
  const outcomes = [
    {
      title: "Đối với cá nhân",
      benefits: [
        "Tự tin tạo ra các ý tưởng sáng tạo và khác biệt",
        "Nâng cao kỹ năng tư duy sáng tạo",
        "Giải quyết vấn đề hiệu quả hơn",
      ],
    },
    {
      title: "Đối với doanh nghiệp",
      benefits: [
        "Tăng cường khả năng đổi mới sản phẩm/dịch vụ",
        "Xây dựng chiến lược marketing hiệu quả",
        "Tích hợp công nghệ AI vào quy trình sáng tạo",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Kết quả bạn sẽ đạt được
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-accent p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <Star className="w-6 h-6 text-secondary mr-2" />
                {outcome.title}
              </h3>
              <ul className="space-y-4">
                {outcome.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-2" />
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};