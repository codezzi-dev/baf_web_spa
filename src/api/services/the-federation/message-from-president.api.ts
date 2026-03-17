import { MessageFromPresidentWrapperDto } from "@/api/types/the-federation/message-from-president.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};
// API calls
const messageFromPresidentApi = {
    getMessageFromPresident: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<MessageFromPresidentWrapperDto>>(
            `/PageMessageFromPresident/GetPageMessageFromPresident/${lang}`
        )
    }
};

export default messageFromPresidentApi;