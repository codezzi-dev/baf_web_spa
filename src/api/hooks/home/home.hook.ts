import { useQuery } from "@tanstack/react-query";
import homeApi from "@/api/services/home/home.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { HomePageWrapperDto } from "@/api/types/home/home.type";
import { useLocale } from "next-intl";

// Hook
export const useGetHomePageElements = () => {
    const locale = useLocale();

    return useQuery<ApiResponse<HomePageWrapperDto>>({
        queryKey: ["home-content", locale],
        queryFn: () => homeApi.getHomePageContent(locale),
    });
};