"use client";
import { useState } from "react";
import { Users } from "lucide-react";
import Header from "@/components/common/PageHero";
import Footer from "@/components/common/PageFooter2";
import CoachSearchFilters from "@/components/coaches-and-judges/coaches/CoachSearchFilters";
import CoachGrid from "@/components/coaches-and-judges/coaches/CoachGrid";

const Coaches = () => {
  const [activeSpecialization, setActiveSpecialization] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Header
          pageGenericElements={{
            pageTopTag: "Professional Athletics Judges",
            pageTopTitle: "Qualified Judges",
            pageTopSummary:
              "Connecting athletes with certified professional judges dedicated to excellence in athletics training across Bangladesh",
          }}
        />

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

        <Footer
          icon={<Users size={48} />}
          title="Become a Certified Judge"
          description={
            <>
              Join our network of professional athletics judges and help shape
              the future of Bangladesh athletics
            </>
          }
          backgroundClass="bg-gradient-to-b from-tag-red to-tag-redDark"
          buttons={[
            {
              label: "Apply for Certification",
              variant: "filled",
              onClick: () => console.log("Apply clicked"),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Coaches;
