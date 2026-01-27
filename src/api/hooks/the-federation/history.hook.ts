import { useQuery } from "@tanstack/react-query";
import historyApi from "@/api/services/the-federation/history.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { HistoryContentWrapperDto } from "@/api/types/the-federation/history.type";
import { useLocale } from "next-intl";

// Hook
export const useGetAllHistories = () => {
  const locale = useLocale();

  return useQuery<ApiResponse<HistoryContentWrapperDto>>({
    queryKey: ["history-content", locale],
    queryFn: () => historyApi.getAllHistories(locale),
    staleTime: 1000 * 60 * 5,     // 5 minutes
    gcTime: 1000 * 60 * 60 * 24,  // 24 hours (must be >= persister maxAge)
    retry: 2,                     // Retry failed requests twice
  });
};