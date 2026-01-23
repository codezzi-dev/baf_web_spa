import { Search, Building, GraduationCap, School, Shield } from "lucide-react";
import { Input } from "@/components/ui/input";

interface AffiliateSearchFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AffiliateSearchFilters = ({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: AffiliateSearchFiltersProps) => {
  const categories = [
    { id: "", label: "All Entities", icon: Building },
    { id: "universities", label: "Universities", icon: GraduationCap },
    { id: "secondary", label: "Secondary", icon: School },
    { id: "police", label: "Police", icon: Shield },
  ];

  return (
    <div className="mb-8">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Search organizations by name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-6 text-base border-2 border-border rounded-xl"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AffiliateSearchFilters;
