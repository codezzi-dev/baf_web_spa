import { HistoryContentWrapperDto } from "@/api/types/the-federation/history.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
  en: "1",
  bn: "2",
};
// API calls
const historyApi = {
  getAllHistories: (locale: string) => {
    const lang = LOCALE_TO_LANG[locale] ?? "1";
    return request<ApiResponse<HistoryContentWrapperDto>>(
      `/HistoryContent/GetHistoryContent/${lang}`
    )
  }
};

export default historyApi;
