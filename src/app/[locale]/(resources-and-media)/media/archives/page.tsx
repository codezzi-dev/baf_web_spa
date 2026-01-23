"use client";
import { useState } from "react";
import ArchiveHeroSection from "@/components/media/archives/ArchiveHeroSection";
import ArchiveSearchFilters from "@/components/media/archives//ArchiveSearchFilters";
import ArchiveGrid from "@/components/media/archives//ArchiveGrid";
import TimelineSection from "@/components/media/archives//TimelineSection";
import ContributeCTA from "@/components/media/archives//ContributeCTA";

const Page = () => {
  const [activeTab, setActiveTab] = useState("historic");
  const [activeCategory, setActiveCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <ArchiveHeroSection />
        
        <ArchiveSearchFilters
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <ArchiveGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          selectedYear={selectedYear}
        />
        
        <TimelineSection />
        
        <ContributeCTA />
      </div>
    </div>
  );
};

export default Page;
