import { useQuery } from "@tanstack/react-query";
import organizationalStructureApi from "@/api/services/the-federation/organizational-structure.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { OrganizationalStructureWrapperDto } from "@/api/types/the-federation/organizational-structure.api";
import { useLocale } from "next-intl";

// Hook
export const useGetOrgStructurePublicContent = () => {
    const locale = useLocale();

    return useQuery<ApiResponse<OrganizationalStructureWrapperDto>>({
        queryKey: ["organizational-structure-content", locale],
        queryFn: () => organizationalStructureApi.getOrganizationalStructure(locale),
    });
};