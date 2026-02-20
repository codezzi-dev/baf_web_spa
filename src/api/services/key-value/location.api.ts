import { KeyValueType } from "@/api/types/common/key-value.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

// API calls
const locationApi = {
    getDistrictsInKeyValue: () => {
        return request<ApiResponse<KeyValueType[]>>(
            `/KeyValue/GetDistrictsInKeyValue`
        )
    },
    getSubDistrictsInKeyValue: (districtId: string) => {
        return request<ApiResponse<KeyValueType[]>>(
            `/KeyValue/GetSubDistrictsInKeyValue/${districtId}`
        )
    }
};




export default locationApi;