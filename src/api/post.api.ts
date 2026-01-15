import { Post } from "@/types/post";
import request from "./api";

// API calls
const postApi = {
    getAllPosts: () =>request<Post[]>(`/posts`),
};

export default postApi;