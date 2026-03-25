import { useQuery } from "@tanstack/react-query";
import safeguardingOfficerApi from "@/api/services/the-federation/safeguarding-officer.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { SafeguardingOfficerWrapperDto } from "@/api/types/the-federation/safeguarding-officer.type";
import { useLocale } from "next-intl";

// Hook
export const useGetSafeguardingOfficer = () => {
    const locale = useLocale();

    return useQuery<ApiResponse<SafeguardingOfficerWrapperDto>>({
        queryKey: ["mission-vision-content", locale],
        queryFn: () => safeguardingOfficerApi.getSafeguardingOfficer(locale),
    });
};