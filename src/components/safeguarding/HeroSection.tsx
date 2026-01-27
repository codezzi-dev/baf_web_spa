import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-12 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-green-light text-primary border border-primary/20">
        <Shield className="w-4 h-4" />
        <span className="text-sm font-medium">Safety & Protection</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Safeguarding <span className="text-primary">Officer</span>
      </h1>
      
      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        Committed to creating a safe, respectful, and inclusive environment for all athletes, coaches, and staff
      </p>
      
      <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
    </section>
  );
};

export default HeroSection;
