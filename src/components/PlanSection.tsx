import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PlanSection = () => {
  const steps = [
    {
      number: "1",
      title: "Đăng ký khóa học",
      description: "Chọn khóa học phù hợp với nhu cầu của bạn",
    },
    {
      number: "2",
      title: "Tham gia học tập",
      description: "Học các công cụ tư duy sáng tạo SIT và tích hợp AI",
    },
    {
      number: "3",
      title: "Ứng dụng thực tế",
      description: "Áp dụng ngay vào công việc và dự án của bạn",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          3 bước đơn giản để bắt đầu
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="opacity-90">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
            Bắt đầu ngay hôm nay!
          </Button>
        </div>
      </div>
    </section>
  );
};