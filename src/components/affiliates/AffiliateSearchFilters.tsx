import { Building, GraduationCap, School, Building2, Landmark } from "lucide-react";

import CategorySection from "../common/CategorySection";
import SearchBarSection from "../common/SearchBarSection";
import SubCategorySection from "../common/SubCategorySection";

interface AffiliateSearchFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeSubCategory: string;
  setActiveSubCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AffiliateSearchFilters = ({
  activeCategory,
  setActiveCategory,
  activeSubCategory,
  setActiveSubCategory,
  searchQuery,
  setSearchQuery,
}: AffiliateSearchFiltersProps) => {
  const categories = [
    { id: "", label: "All Entities", icon: Building },

    { id: "Division", label: "Divisions", icon: Building2 },
    { id: "University", label: "Universities", icon: GraduationCap },
    { id: "Board", label: "Boards", icon: Landmark },
    { id: "PE College", label: "PE Colleges", icon: School },
  ];

  const subCategories = [
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

  return (
    <div className="mb-8 space-y-4">

      {/* Search Bar */}
      <SearchBarSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Search organizations by name or location..."
      />

      {/* Category Buttons */}
      <CategorySection
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Sub-Category Buttons */}
      {activeCategory === "Division" && (
       <SubCategorySection 
        subCategories={subCategories}
        activeSubCategory={activeSubCategory}
        setActiveSubCategory={setActiveSubCategory}
       />
      )}

    </div>
  );
};

export default AffiliateSearchFilters;
