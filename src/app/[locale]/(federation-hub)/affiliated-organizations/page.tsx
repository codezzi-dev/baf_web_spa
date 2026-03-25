"use client"
import { useState } from "react";
import AffiliateHeroSection from "@/components/affiliates/AffiliateHeroSection";
import AffiliateSearchFilters from "@/components/affiliates/AffiliateSearchFilters";
import AffiliateGrid from "@/components/affiliates/AffiliateGrid";
import AffiliateCTA from "@/components/affiliates/AffiliateCTA";
import Loading from "@/components/common/Loading";
import { useGetPublicAffiliateOrganizations } from "@/api/hooks/the-federation/affiliated-organizations.hook"
import Error from "@/components/common/Error";
import PageHero from "@/components/common/PageHero";
import StatisticsSection from "@/components/common/StatisticsSection";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeSubCategory, setActiveSubCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useGetPublicAffiliateOrganizations();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const pageGenericElements = data?.data?.pageGenericElements;
  const pageAffiliatedOrganizationHistories = data?.data?.pageAffiliatedOrganizationHistories;
  const affiliateOrganization = data?.data?.affiliateOrganization ?? [];

  const stats = [
    { value: String(pageAffiliatedOrganizationHistories?.totalOganizations ?? 0), label: "Total Organizations", color: "bg-tag-green" },
    { value: String(pageAffiliatedOrganizationHistories?.totalDivisions ?? 0), label: "Divisions", color: "bg-tag-red" },
    { value: String(pageAffiliatedOrganizationHistories?.totalFederations ?? 0), label: "Federations", color: "bg-tag-yellow" },
    { value: String(pageAffiliatedOrganizationHistories?.totalAreas ?? 0), label: "Total Areas", color: "bg-tag-blue" },
  ];


  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8 pt-40 space-y-4">
        {/* Hero Section */}
        {pageGenericElements && <PageHero pageGenericElements={pageGenericElements} />}

        {/* <AffiliateHeroSection /> */}

        <StatisticsSection stats={stats} />

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
          affiliateOrganization={affiliateOrganization}
        />

        <AffiliateCTA />
      </div>
    </div>
  );
};

export default Page;
