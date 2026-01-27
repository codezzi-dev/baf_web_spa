import React from "react";
import { Button } from "../ui/Button";
import { MapPin } from "lucide-react";

interface SubCategory<T extends string> {
  id: T
  label: string
}

interface SubCategorySectionProps<T extends string> {
  subCategories: SubCategory<T>[];
  activeSubCategory: string;
  setActiveSubCategory: (id: string) => void;
}

const SubCategorySection = <T extends string>({
  subCategories,
  activeSubCategory,
  setActiveSubCategory,
}: SubCategorySectionProps<T>) => {
  return (
    <div className=" space-y-2 border p-4 rounded-lg">
      <div className=" flex gap-2 items-center text-md">
        <MapPin className="w-4 h-4" />
        <p>Filter by Division:</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {subCategories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveSubCategory(category.id === activeSubCategory ? "" : category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSubCategory === category.id
              ? "bg-tag-green text-white hover:bg-tag-green"
              : "bg-muted text-muted-foreground hover:bg-tag-green/10 hover:text-tag-green"
              }`}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SubCategorySection;