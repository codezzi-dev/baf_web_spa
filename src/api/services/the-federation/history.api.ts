import { HistoryContentWrapperDto } from "@/api/types/the-federation/history.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

// API calls
const historyApi = {
  getAllHistories: (locale: string) => {
    const lang = (locale === 'en') ? "1" : "2";
    return request<ApiResponse<HistoryContentWrapperDto>>(
      `/HistoryContent/GetHistoryContent/${lang}`
    )
  }
};

export default historyApi;
