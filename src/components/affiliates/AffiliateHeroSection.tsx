import { Building2 } from "lucide-react";

const AffiliateHeroSection = () => {
  const stats = [
    { value: "27", label: "Total Organizations", bgColor: "bg-tag-green" },
    { value: "11", label: "Divisions", bgColor: "bg-tag-red" },
    { value: "5", label: "Federations", bgColor: "bg-tag-yellow" },
    { value: "11910+", label: "Total Areas", bgColor: "bg-tag-blue" },
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

      <div className="flex flex-wrap justify-center gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} text-white px-6 py-3 rounded-lg min-w-[120px]`}
          >
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateHeroSection;
