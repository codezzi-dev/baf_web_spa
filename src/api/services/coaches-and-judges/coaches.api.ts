import { CoachAssociationHistoriesWrapperDto, QualifiedCoachesCatagoriesWrapperDto, QualifiedCoachesWrapperDto } from "@/api/types/coaches-and-judges/coaches.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};
// API calls
const coachesApi = {
    getCoachAssociationHistories: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<CoachAssociationHistoriesWrapperDto>>(
            `/PageCoachAssociation/GetPageCoachAssociation/${lang}`
        )
    },
    getQualifiedCoachesCatagories: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<QualifiedCoachesCatagoriesWrapperDto>>(
            `/PageQualifiedCoache/GetPageQualifiedCoache/${lang}`
        )
    },
    getQualifiedCoaches: (locale: string, filters: {
        coacheCategoryId: number;
        coacheDivitionId: number;
        coacheDistrictId: number;
        status: number;
        coacheFullName: string;
    }) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<QualifiedCoachesWrapperDto>>(
            `/Coache/GetCoache/${lang}`,
            {
                method: "POST",
                body: JSON.stringify(filters),
            }
        );
    },
};

export default coachesApi;

