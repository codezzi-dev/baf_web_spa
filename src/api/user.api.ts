import request from './api';
import {User} from '../types/user';

export const userApi = {
  getUser: (id: string) =>
    request<User>(`/users/${id}`),

  getUsers: () =>
    request<User[]>(`/users`),

  createUser: (data: Partial<User>) =>
    request<User>(`/users`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  updateUser: (id: string, data: Partial<User>) =>
    request<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  deleteUser: (id: string) =>
    request<void>(`/users/${id}`, {
      method: 'DELETE',
    }),
};
