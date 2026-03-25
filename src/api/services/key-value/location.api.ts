import { KeyValueType } from "@/api/types/common/key-value.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

// API calls
const locationApi = {
    getDivisionsInKeyValue: () => {
        return request<ApiResponse<KeyValueType[]>>(
            `/KeyValue/GetDivisionsInKeyValue`
        )
    },
    getSubDistrictsInKeyValue: (districtId: string) => {
        return request<ApiResponse<KeyValueType[]>>(
            `/KeyValue/GetSubDistrictsInKeyValue/${districtId}`
        )
    }
};




export default locationApi;