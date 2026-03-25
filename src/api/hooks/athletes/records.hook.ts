import { useQuery } from "@tanstack/react-query";
import recordApi from "@/api/services/athletes/records.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { AthleteRecordDto } from "@/api/types/athletics/records.type";
import { useLocale } from "next-intl";

// Hook
export const useGetRecords = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<AthleteRecordDto[]>>({
        queryKey: ["record-content", locale],
        queryFn: () => recordApi.getAtheltesRecords(locale),
    });
};