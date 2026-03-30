import { useQuery } from "@tanstack/react-query";
import judgesApi from "@/api/services/coaches-and-judges/judges.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { JudgeAssociationHistoriesWrapperDto, QualifiedJudgesCatagoriesWrapperDto, QualifiedJudgesWrapperDto } from "@/api/types/coaches-and-judges/judges.type";
import { useLocale } from "next-intl";

// Hook
export const useGetJudgesAssociationHistories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<JudgeAssociationHistoriesWrapperDto>>({
        queryKey: ["judges-association-histories-content", locale],
        queryFn: () => judgesApi.getjudgesAssociationHistories(locale),
    });
};

export const useGetQualifiedJudgesCatagories = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<QualifiedJudgesCatagoriesWrapperDto>>({
        queryKey: ["qualified-judges-catagories-content", locale],
        queryFn: () => judgesApi.getQualifiedJudgesCatagories(locale),
    });
};

export const useGetQualifiedJudges = (filters: {
    coacheCategoryId: number;
    coacheDivitionId: number;
    coacheDistrictId: number;
    status: number;
    coacheFullName: string;
}) => {
    const locale = useLocale();
    return useQuery({
        queryKey: ["judges", filters],
        queryFn: () => judgesApi.getQualifiedJudges(locale, filters),
    });
};