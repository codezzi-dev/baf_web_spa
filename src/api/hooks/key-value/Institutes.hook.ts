import { useQuery } from "@tanstack/react-query";
import keyValueApi from "@/api/services/key-value/Institutes.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { KeyValueType } from "@/api/types/common/key-value.type";
import { useLocale } from "next-intl";

// Hook
export const useGetAllInstitutes = () => {
    const locale = useLocale();

    return useQuery<ApiResponse<KeyValueType[]>>({
        queryKey: ["institutes-content", locale],
        queryFn: () => keyValueApi.getInstitutesInKeyValue(),
    });
};