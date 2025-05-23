import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Example icon for the button

export const ZenBolsterCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Sleep?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
          Pre-order Zen Bolster today and unlock the secret to perfect, rejuvenating sleep. Experience the difference a smart sleep companion can make!
        </p>
        
        {/* Primary Call to Action Button */}
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-7 text-xl font-semibold shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
        >
          Pre-order Zen Bolster Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Placeholder for an optional email signup form */}
        {/* 
        <div className="mt-12 max-w-md mx-auto">
          <p className="mb-4 text-lg opacity-80">Or, sign up for exclusive updates and early bird offers:</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow p-3 rounded-md text-gray-800 focus:ring-2 focus:ring-green-400 outline-none" 
            />
            <Button 
              type="submit" 
              className="bg-white text-blue-600 hover:bg-slate-100 px-6 py-3 font-semibold"
            >
              Notify Me
            </Button>
          </form>
        </div>
        */}
      </div>
    </section>
  );
};
