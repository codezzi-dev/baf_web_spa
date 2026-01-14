import request from "./api";
import { Member } from "@/types/member";
// API calls
const memberApi = {
    getMembers: () =>request<Member[]>(`/members`),
};

export default memberApi;