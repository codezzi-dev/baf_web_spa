import { JudgeAssociationHistoriesWrapperDto, QualifiedJudgesCatagoriesWrapperDto, QualifiedJudgesWrapperDto } from "@/api/types/coaches-and-judges/judges.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};
// API calls
const judgesApi = {
    getjudgesAssociationHistories: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<JudgeAssociationHistoriesWrapperDto>>(
            `/PageJudgeAssociation/GetPageJudgeAssociation/${lang}`
        )
    },
    getQualifiedJudgesCatagories: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<QualifiedJudgesCatagoriesWrapperDto>>(
            `/PageQualifiedJudge/GetPageQualifiedJudge/${lang}`
        )
    },
    getQualifiedJudges: (locale: string, filters: {
        coacheCategoryId: number;
        coacheDivitionId: number;
        coacheDistrictId: number;
        status: number;
        coacheFullName: string;
    }) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<QualifiedJudgesWrapperDto>>(
            `/Judge/GetJudge/${lang}`,
            {
                method: "POST",
                body: JSON.stringify(filters),
            }
        );
    },
};

export default judgesApi;
