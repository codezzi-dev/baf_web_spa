import { Search, Dumbbell, Medal, Timer, Target, Footprints, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
}

const specializations = [
  { id: "sprints", label: "Sprints", icon: Timer },
  { id: "distance", label: "Distance", icon: Footprints },
  { id: "throws", label: "Throws", icon: Target },
  { id: "jumps", label: "Jumps", icon: Dumbbell },
  { id: "combined", label: "Combined", icon: Medal },
];

// const divisions = [
//   "All Divisions",
//   "Dhaka",
//   "Chittagong",
//   "Rajshahi",
//   "Khulna",
//   "Sylhet",
//   "Barisal",
//   "Rangpur",
//   "Mymensingh",
// ];
  const divisions = [
    { id: "", label: "All Divisions" },

    { id: "Dhaka", label: "Dhaka" },
    { id: "Chittagong", label: "Chittagong" },
    { id: "Rajshahi", label: "Rajshahi" },
    { id: "Khulna", label: "Khulna" },
    { id: "Sylhet", label: "Sylhet" },
    { id: "Rangpur", label: "Rangpur" },
    { id: "Barisal", label: "Barisal" },
    { id: "Mymensingh", label: "Mymensingh" }


  ]

const CoachSearchFilters = ({
  activeSpecialization,
  setActiveSpecialization,
  searchQuery,
  setSearchQuery,
  selectedDivision,
  setSelectedDivision,
}: CoachSearchFiltersProps) => {
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
        subCategories={divisions}
        activeSubCategory={selectedDivision}
        setActiveSubCategory={setSelectedDivision}
      />

    </div>
  );
};

export default CoachSearchFilters;
