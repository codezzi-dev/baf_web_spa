import { useQuery } from "@tanstack/react-query";
import locationApi from "@/api/services/key-value/location.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { KeyValueType } from "@/api/types/common/key-value.type";
import { useLocale } from "next-intl";


export const useGetAllDistricts = () => {
    const locale = useLocale();

    return useQuery<ApiResponse<KeyValueType[]>>({
        queryKey: ["districts-content", locale],
        queryFn: () => locationApi.getDistrictsInKeyValue(),
    });
};

export const useGetAllSubDistricts = (districtId: string) => {
    const locale = useLocale();

    return useQuery<ApiResponse<KeyValueType[]>>({
        queryKey: ["sub-districts-content", locale, districtId],
        queryFn: () => locationApi.getSubDistrictsInKeyValue(districtId),
        enabled: !!districtId,
    });
};