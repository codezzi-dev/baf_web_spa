import { useQuery } from "@tanstack/react-query";
import messageFromPresidentApi from "@/api/services/the-federation/message-from-president.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { MessageFromPresidentWrapperDto } from "@/api/types/the-federation/message-from-president.type";
import { useLocale } from "next-intl";

// Hook
export const useGetMessageFromPresident = () => {
    const locale = useLocale();
    return useQuery<ApiResponse<MessageFromPresidentWrapperDto>>({
        queryKey: ["message-from-president-content", locale],
        queryFn: () => messageFromPresidentApi.getMessageFromPresident(locale),
    });
};