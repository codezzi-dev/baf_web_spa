import { Search, Video, FileText, Newspaper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategorySection from "@/components/common/CategorySection";
import SearchBarSection from "@/components/common/SearchBarSection";

interface ArchiveSearchFiltersProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const categories = [
  { id: "video", label: "Video", icon: Video },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "news", label: "News", icon: Newspaper },
];

const years = ["All Years", "2020s", "2010s", "2000s", "1990s", "1980s", "1970s"];

const ArchiveSearchFilters = ({
  activeTab,
  setActiveTab,
  activeCategory,
  setActiveCategory,
  selectedYear,
  setSelectedYear,
  searchQuery,
  setSearchQuery,
}: ArchiveSearchFiltersProps) => {
  return (
    <section className="space-y-6 mb-8">
      {/* Search Bar */}
      <SearchBarSection 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      placeholder="Search archives by title, description, or year..."
      />

      {/* Tabs and Year Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between bg-muted rounded-full p-1 w-full md:w-auto md:flex-1">
          <Button
            variant={activeTab === "all" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-6 w-1/3 ${
              activeTab === "all"
                ? "bg-tag-green text-white hover:bg-tag-green/90"
                : ""
            }`}
          >
            All
          </Button>
          <Button
            variant={activeTab === "historic" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("historic")}
            className={`rounded-full px-6 w-1/3 ${
              activeTab === "historic"
                ? "bg-tag-green text-white hover:bg-tag-green/90"
                : ""
            }`}
          >
            Historic
          </Button>
          <Button
            variant={activeTab === "photo" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("photo")}
            className={`rounded-full px-6 w-1/3 ${
              activeTab === "photo"
                ? "bg-tag-green text-white hover:bg-tag-green/90"
                : ""
            }`}
          >
            Photo
          </Button>
        </div>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full md:w-[180px] rounded-lg">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Category Icons */}
      <CategorySection
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </section>
  );
};

export default ArchiveSearchFilters;