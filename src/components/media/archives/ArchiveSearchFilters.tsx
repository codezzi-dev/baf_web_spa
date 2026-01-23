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
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search archives by title, description, or year..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-6 text-base border-border rounded-xl"
        />
      </div>

      {/* Tabs and Year Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center bg-muted rounded-full p-1">
          <Button
            variant={activeTab === "historic" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("historic")}
            className={`rounded-full px-6 ${
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
            className={`rounded-full px-6 ${
              activeTab === "photo"
                ? "bg-tag-green text-white hover:bg-tag-green/90"
                : ""
            }`}
          >
            Photo
          </Button>
        </div>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-40 rounded-lg">
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
      <div className="flex items-center justify-center gap-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id === activeCategory ? "" : category.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-colors ${
                activeCategory === category.id
                  ? "bg-[hsl(var(--green-dark))]/10 text-[hsl(var(--green-dark))]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ArchiveSearchFilters;
