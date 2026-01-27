"use client";
import { useState } from "react";
import CoachHeroSection from "@/components/coaches-and-judges/coaches/CoachHeroSection";
import CoachSearchFilters from "@/components/coaches-and-judges/coaches/CoachSearchFilters";
import CoachGrid from "@/components/coaches-and-judges/coaches/CoachGrid";
import CoachCTA from "@/components/coaches-and-judges/coaches/CoachCTA";

const Coaches = () => {
  const [activeSpecialization, setActiveSpecialization] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <CoachHeroSection />
        <CoachSearchFilters
          activeSpecialization={activeSpecialization}
          setActiveSpecialization={setActiveSpecialization}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDivision={selectedDivision}
          setSelectedDivision={setSelectedDivision}
        />
        
        <CoachGrid
          searchQuery={searchQuery}
          activeSpecialization={activeSpecialization}
          selectedDivision={selectedDivision}
        />
        
        <CoachCTA />
      </div>
    </div>
  );
};

export default Coaches;
