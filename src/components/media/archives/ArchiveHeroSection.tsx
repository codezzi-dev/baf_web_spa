import { Archive } from "lucide-react";

const stats = [
  { value: "50+", label: "Years of History", color: "bg-tag-red" },
  { value: "500+", label: "Historic Photos", color: "bg-tag-green" },
  { value: "200+", label: "Documents", color: "bg-tag-yellow" },
  { value: "50+", label: "Video Archives", color: "bg-tag-blue" },
];

const ArchiveHeroSection = () => {
  return (
    <section className="text-center py-12">
      <div className="inline-flex items-center gap-2 bg-[hsl(var(--yellow))]/20 text-[hsl(var(--green-dark))] px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Archive className="w-4 h-4" />
        Preserving Our Legacy
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Historical <span className="text-[hsl(var(--yellow))]">Archives</span>
      </h1>
      
      <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
        Explore the rich history of Bangladesh Athletics through documents, photos, and 
        memorable moments spanning over five decades
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white rounded-xl py-4 px-6`}
          >
            <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchiveHeroSection;
