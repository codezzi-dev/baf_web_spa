import { useQuery } from "@tanstack/react-query";
import coachesApi from "@/api/services/coaches-and-judges/coaches.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { CoachAssociationHistoriesWrapperDto, QualifiedCoachesCatagoriesWrapperDto } from "@/api/types/coaches-and-judges/coaches.type";
import { useLocale } from "next-intl";

// Hooks
export const useGetCoachAssociationHistories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<CoachAssociationHistoriesWrapperDto>>({
        queryKey: ["coach-association-histories-content", locale],
        queryFn: () => coachesApi.getCoachAssociationHistories(locale),
    });
};
export const useGetQualifiedCoachesCatagories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<QualifiedCoachesCatagoriesWrapperDto>>({
        queryKey: ["qualified-coached-catagories-content", locale],
        queryFn: () => coachesApi.getQualifiedCoachesCatagories(locale),
    });
};

export const useGetQualifiedCoaches = (filters: {
    coacheCategoryId: number;
    coacheDivitionId: number;
    coacheDistrictId: number;
    status: number;
    coacheFullName: string;
}) => {
    const locale = useLocale();
    return useQuery({
        queryKey: ["coaches", filters],
        queryFn: () => coachesApi.getQualifiedCoaches(locale, filters),
    });
};