"use client";
import { useState } from "react";
import { Users } from "lucide-react";
import Footer from "@/components/common/PageFooter2";
import CoachSearchFilters from "@/components/coaches-and-judges/coaches/CoachSearchFilters";
import CoachGrid from "@/components/coaches-and-judges/coaches/CoachGrid";
import { useGetQualifiedJudges, useGetQualifiedJudgesCatagories } from "@/api/hooks/coaches-and-judges/judges.hook";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import PageHero from "@/components/common/PageHero";

const Coaches = () => {
  const [activeSpecialization, setActiveSpecialization] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  // ✅ All hooks at the top, before any early returns
  const { data, error, isLoading } = useGetQualifiedJudgesCatagories();

  const { data: coachedData, isLoading: isLoadingCoachedData, error: errorCoachedData } = useGetQualifiedJudges({
    coacheCategoryId: activeSpecialization ? Number(activeSpecialization) : 0,
    coacheDivitionId: selectedDivision ? Number(selectedDivision) : 0,
    coacheDistrictId: 0,
    status: 1,
    coacheFullName: searchQuery ?? "",
  });

  // ✅ Early returns AFTER all hooks
  if (isLoading) return <Loading />;
  if (error) return <Error />;


  const pageGenericElements = data?.data?.pageGenericElements;
  const categories = data?.data?.categoryDtos;
  const divisions = data?.data?.divisions;
  const judges = coachedData?.data?.coacheDtos ?? [];
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        {pageGenericElements && <PageHero pageGenericElements={pageGenericElements} />}


        <CoachSearchFilters
          activeSpecialization={activeSpecialization}
          setActiveSpecialization={setActiveSpecialization}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDivision={selectedDivision}
          setSelectedDivision={setSelectedDivision}
          categories={categories ?? []}
          divisions={divisions ?? []}
        />

        <CoachGrid
          coaches={judges}
          isLoading={isLoadingCoachedData}
          error={errorCoachedData}
        />


        {pageGenericElements && <Footer
          icon={<Users size={48} />}
          title={pageGenericElements.pageBottomTitle ?? ""}
          description={
            <>
              {pageGenericElements?.pageBottomSummary}
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
        />}
      </div>
    </div>
  );
};

export default Coaches;
