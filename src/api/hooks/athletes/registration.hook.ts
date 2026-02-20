import { useQuery } from "@tanstack/react-query";
import registrationApi from "@/api/services/athletes/registration.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { useLocale } from "next-intl";

// Hook
export const useGetAtheltesRegistrationExist = (identityNumber: string) => {
    const locale = useLocale();
    return useQuery<ApiResponse<boolean>>({
        queryKey: ["atheltes-registration-exist", locale, identityNumber],
        queryFn: () => registrationApi.getAtheltesRegistrationExist(identityNumber, locale),
        enabled: !!identityNumber,
    });
};