import { useQuery } from "@tanstack/react-query";
import affiliateOrganizationApi from "@/api/services/the-federation/affiliated-organizations.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { AffiliatedOrganizationWrapperDto } from "@/api/types/the-federation/affiliated-organizations.type";
import { useLocale } from "next-intl";

// Hook
export const useGetPublicAffiliateOrganizations = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<AffiliatedOrganizationWrapperDto>>({
        queryKey: ["affiliated-organizations-content", locale],
        queryFn: () => affiliateOrganizationApi.getPublicAffiliateOrganizations(locale),
    });
};