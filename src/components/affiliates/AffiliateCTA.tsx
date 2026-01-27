import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const AffiliateCTA = () => {
  return (
    <div className="bg-maroon rounded-2xl p-8 md:p-12 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Become an Affiliated Organization
      </h2>
      <p className="text-white/80 max-w-2xl mx-auto mb-6">
        Join our network of excellence and contribute to the growth of athletics in Bangladesh
      </p>
      <Button
        variant="outline"
        className="bg-transparent border-white text-white hover:bg-white hover:text-maroon"
      >
        Apply for Affiliation
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default AffiliateCTA;
