import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import  userApi from '../services/user.service';
// Hooks
export const useGetUser = (id: string) =>
    useQuery({ queryKey: ['user', id], queryFn: () => userApi.getUser(id) });

export const useGetUsers = () =>
    useQuery({ queryKey: ['users'], queryFn: userApi.getUsers });

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userApi.createUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: any }) => userApi.updateUser(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userApi.deleteUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
    });
};