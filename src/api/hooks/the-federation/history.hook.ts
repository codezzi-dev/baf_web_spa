import { useQuery } from "@tanstack/react-query";
import historyApi from "@/api/services/the-federation/history.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { HistoryContentWrapperDto } from "@/api/types/the-federation/history.type";

// Query key
export const HISTORY_QUERY_KEY = ["history-content"] as const;

// Hook
export const useGetAllHistories = () =>
  useQuery<ApiResponse<HistoryContentWrapperDto>>({
    queryKey: HISTORY_QUERY_KEY,
    queryFn: historyApi.getAllHistories,
    staleTime: 1000 * 60 * 5,
  });
