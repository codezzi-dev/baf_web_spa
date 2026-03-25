import { AffiliateOrganization } from "@/api/types/the-federation/affiliated-organizations.type";
import AffiliateCard from "./AffiliateCard";

interface AffiliateGridProps {
  searchQuery: string;
  activeCategory: string;
  activeSubCategory: string;
  affiliateOrganization: AffiliateOrganization[];
}

const AffiliateGrid = ({ searchQuery, activeCategory, activeSubCategory, affiliateOrganization }: AffiliateGridProps) => {
  const filteredOrganizations = affiliateOrganization.filter((org) => {
    const matchesSearch =
      searchQuery === "" ||
      (org.organizationName ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (org.organizationAddress ?? "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (org.organizationBio ?? "").toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !activeCategory ||
      org.affiliateOrganizationCategoryId === Number(activeCategory);

    const matchesSubCategory =
      !activeSubCategory ||
      org.organizationDivitionId === Number(activeSubCategory);

    return matchesSearch && matchesCategory && matchesSubCategory;
  });

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrganizations.map((org) => (
          <AffiliateCard key={org.affiliateOrganizationId} organization={org} />
        ))}
      </div>
      {filteredOrganizations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No organizations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AffiliateGrid;