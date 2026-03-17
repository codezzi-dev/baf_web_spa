import { HomePageWrapperDto } from "@/api/types/home/home.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};

const homeApi = {
    getHomePageContent: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<HomePageWrapperDto>>(  // ✅ removed []
            `/HomePageContent/GetHomePageContent/3/3/3/${lang}`
        );
    },
};

export default homeApi;