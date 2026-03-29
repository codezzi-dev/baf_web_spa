import { CoachAssociationHistoriesWrapperDto } from "@/api/types/coaches-and-judges/coaches.type";
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
    }
};

export default coachesApi;
