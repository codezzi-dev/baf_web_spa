import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import postApi from '@/api/post.api';
// Hooks
export const useGetAllPosts = () =>
    useQuery({ queryKey: ['posts'], queryFn: () => postApi.getAllPosts() }); 