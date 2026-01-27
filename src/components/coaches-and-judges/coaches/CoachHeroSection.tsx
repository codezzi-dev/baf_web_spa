import StatisticsSection from "@/components/common/StatisticsSection";
import { Users } from "lucide-react";

const CoachHeroSection = () => {
  const stats = [
    { value: "150+", label: "Certified Coaches", color: "bg-tag-green" },
    { value: "8", label: "Divisions", color: "bg-tag-red" },
    { value: "12", label: "Specializations", color: "bg-tag-yellow" },
    { value: "25+", label: "Years Legacy", color: "bg-tag-blue" },
  ];

  return (
    <div className="text-center mb-8 mt-40">
      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <Users className="w-4 h-4" />
        <span>Professional Athletics Coaches</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Qualified<span className="text-maroon"> Coaches</span>
      </h1>
      
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Connecting athletes with certified professional coaches dedicated to excellence in athletics training across Bangladesh
      </p>

    <StatisticsSection stats={stats} />
    </div>
  );
};

export default CoachHeroSection;
