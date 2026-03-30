import { OrganizationalStructureWrapperDto } from "@/api/types/the-federation/organizational-structure.api";
import { ApiResponse } from "@/api/types/common/api-response.type";
import request from "../../api";

const LOCALE_TO_LANG: Record<string, string> = {
    en: "1",
    bn: "2",
};
// API calls
const organizationalStructureApi = {
    getOrganizationalStructure: (locale: string) => {
        const lang = LOCALE_TO_LANG[locale] ?? "1";
        return request<ApiResponse<OrganizationalStructureWrapperDto>>(
            `/OrganizationalStructureContent/GetOrgStructurePublicContent/${lang}`
        )
    }
};

export default organizationalStructureApi;