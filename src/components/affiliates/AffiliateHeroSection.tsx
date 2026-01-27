import { Building2 } from "lucide-react";
import StatisticsSection from "../common/StatisticsSection";

const AffiliateHeroSection = () => {
  const stats = [
    { value: "27", label: "Total Organizations", color: "bg-tag-green" },
    { value: "11", label: "Divisions", color: "bg-tag-red" },
    { value: "5", label: "Federations", color: "bg-tag-yellow" },
    { value: "11910+", label: "Total Areas", color: "bg-tag-blue" },
  ];

  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
        <Building2 className="w-4 h-4" />
        <span>Our Athletic Partners</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Affiliated <span className="text-maroon">Organizations</span>
      </h1>
      
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Our network of affiliated organizations working together to promote athletics across Bangladesh
      </p>

       <StatisticsSection stats={stats} />
    </div>
  );
};

export default AffiliateHeroSection;
