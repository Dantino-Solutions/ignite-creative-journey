import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-blue-900 text-white px-4 py-20">
      <div className="container max-w-6xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Khám phá bí quyết đổi mới sáng tạo đột phá với phương pháp SIT!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Bạn là một cá nhân, nhà lãnh đạo, hay doanh nghiệp đang tìm kiếm cách tạo ra những ý tưởng sáng tạo, khác biệt và hiệu quả?
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
          Đăng ký ngay hôm nay!
        </Button>
      </div>
    </section>
  );
};