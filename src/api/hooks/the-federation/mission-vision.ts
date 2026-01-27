import { useQuery } from "@tanstack/react-query";
import missionVisionApi from "@/api/services/the-federation/mission-vision";
import { ApiResponse } from "@/api/types/common/api-response.type";
import { MissionVisionContentWrapperDto } from "@/api/types/the-federation/mission-vision";
import { useLocale } from "next-intl";

// Hook
export const useGetAllMissionVisions = () => {
  const locale = useLocale();

  return useQuery<ApiResponse<MissionVisionContentWrapperDto>>({
    queryKey: ["mission-vision-content", locale],
    queryFn: () => missionVisionApi.getMissionVission(locale),
  });
};