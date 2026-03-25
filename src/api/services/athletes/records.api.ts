import { AthleteRecordDto } from "@/api/types/athletics/records.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";
const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};

// API calls
const recordApi = {
    getAtheltesRecords: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<AthleteRecordDto[]>>(
            `/AthleteRecord/GetAthleteRecords/${lang}`
        )
    },
};

export default recordApi;