import { KeyValueType } from "@/api/types/common/key-value.type";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

// API calls
const keyValueApi = {
    getInstitutesInKeyValue: () => {
        return request<ApiResponse<KeyValueType[]>>(
            `/KeyValue/GetInstitutesInKeyValue`
        )
    }
};

export default keyValueApi;
