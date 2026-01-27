"use client"
import { useState } from "react";
import AffiliateHeroSection from "@/components/affiliates/AffiliateHeroSection";
import AffiliateSearchFilters from "@/components/affiliates/AffiliateSearchFilters";
import AffiliateGrid from "@/components/affiliates/AffiliateGrid";
import AffiliateCTA from "@/components/affiliates/AffiliateCTA";

const  Page = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8 pt-40">
        <AffiliateHeroSection />
        
        <AffiliateSearchFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeSubCategory={activeSubCategory}
          setActiveSubCategory={setActiveSubCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <AffiliateGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          activeSubCategory={activeSubCategory}
        />
        
        <AffiliateCTA />
      </div>
    </div>
  );
};

export default Page;
