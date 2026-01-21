import { HistoryContentWrapperDto } from "@/api/types/the-federation/history.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

// API calls
const historyApi = {
  getAllHistories: () =>
    request<ApiResponse<HistoryContentWrapperDto>>(
      "/HistoryContent/GetHistoryContent/1"
    ),
};

export default historyApi;
