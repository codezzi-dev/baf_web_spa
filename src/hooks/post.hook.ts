import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import postApi from '@/services/post.service';
// Hooks
export const useGetAllPosts = () =>
    useQuery({ queryKey: ['posts'], queryFn: () => postApi.getPosts() }); 