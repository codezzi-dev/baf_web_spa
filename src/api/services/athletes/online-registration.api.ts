import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "@/api/types/common/api-response.type";
import type { CreateAthleteRequest } from "@/api/schemas/athletes/online-registration.schema";
import request from "@/api/api";

const postRegisterAthlete = async (
    data: CreateAthleteRequest
): Promise<ApiResponse<CreateAthleteRequest>> => {
    return request<ApiResponse<CreateAthleteRequest>>(
        "/Athlete/RegisterAthlete",
        {
            method: "POST",
            body: (() => {
                const requestBody = JSON.stringify({ athleteFormDto: data });
                console.log("Request Payload:", requestBody);
                return requestBody;
            })(),
        }
    );
};

export const useRegisterAthlete = () => {
    return useMutation({
        mutationFn: postRegisterAthlete,

        onSuccess: (response) => {
            console.log("Success:", response.data);
        },

        onError: (error) => {
            console.error("Error:", error.message);
        },
    });
};