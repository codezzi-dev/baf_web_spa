import { Dumbbell, Medal, Timer, Target, Footprints, LucideIcon } from "lucide-react";
import SearchBarSection from "@/components/common/SearchBarSection";
import CategorySection from "@/components/common/CategorySection";
import SubCategorySection from "@/components/common/SubCategorySection";

interface CoachSearchFiltersProps {
  activeSpecialization: string;
  setActiveSpecialization: (specialization: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDivision: string;
  setSelectedDivision: (division: string) => void;
  categories: { key?: string | number | null; value?: string | null }[];
  divisions: { key?: string | number | null; value?: string | null }[];
}

// Icon map to match API category names to icons
const specializationIconMap: Record<string, LucideIcon> = {
  Sprints: Timer,
  Distance: Footprints,
  Throws: Target,
  Jumps: Dumbbell,
  Combined: Medal,
};

const CoachSearchFilters = ({
  activeSpecialization,
  setActiveSpecialization,
  searchQuery,
  setSearchQuery,
  selectedDivision,
  setSelectedDivision,
  categories,
  divisions,
}: CoachSearchFiltersProps) => {
  const specializations = categories.map((cat) => ({
    id: String(cat.key ?? ""),
    label: cat.value ?? "",
    icon: specializationIconMap[cat.value ?? ""] ?? Dumbbell,
  }));

  const divisionOptions = [
    { id: "", label: "All Divisions" },
    ...divisions.map((div) => ({
      id: String(div.key ?? ""),
      label: div.value ?? "",
    })),
  ];
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <SearchBarSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search coaches by name, location..."
      />
      {/* Category Icons */}
      <CategorySection
        categories={specializations}
        activeCategory={activeSpecialization}
        setActiveCategory={setActiveSpecialization}
      />

      {/* Division Filter */}
      <SubCategorySection
        subCategories={divisionOptions}
        activeSubCategory={selectedDivision}
        setActiveSubCategory={setSelectedDivision}
      />

    </div>
  );
};

export default CoachSearchFilters;
