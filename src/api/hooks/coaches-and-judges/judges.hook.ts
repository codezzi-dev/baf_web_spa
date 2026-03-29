import { useQuery } from "@tanstack/react-query";
import judgesApi from "@/api/services/coaches-and-judges/judges.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { JudgeAssociationHistoriesWrapperDto } from "@/api/types/coaches-and-judges/judges.type";
import { useLocale } from "next-intl";

// Hook
export const useGetJudgesAssociationHistories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<JudgeAssociationHistoriesWrapperDto>>({
        queryKey: ["judges-association-histories-content", locale],
        queryFn: () => judgesApi.getjudgesAssociationHistories(locale),
    });
};