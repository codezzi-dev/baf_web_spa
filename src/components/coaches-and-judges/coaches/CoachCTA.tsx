import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const CoachCTA = () => {
  return (
    <div className="bg-maroon rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Become a Certified Coach
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-6">
        Join our network of professional athletics coaches and help shape the future of Bangladesh athletics
      </p>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-white hover:text-maroon"
      >
        Apply for Certification
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default CoachCTA;
