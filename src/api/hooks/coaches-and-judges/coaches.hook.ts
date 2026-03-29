import { useQuery } from "@tanstack/react-query";
import coachesApi from "@/api/services/coaches-and-judges/coaches.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { CoachAssociationHistoriesWrapperDto } from "@/api/types/coaches-and-judges/coaches.type";
import { useLocale } from "next-intl";

// Hook
export const useGetCoachAssociationHistories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<CoachAssociationHistoriesWrapperDto>>({
        queryKey: ["coach-association-histories-content", locale],
        queryFn: () => coachesApi.getCoachAssociationHistories(locale),
    });
};