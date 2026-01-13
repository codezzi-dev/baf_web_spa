const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// API calls
const userApi = {
    getUser: (id: string) =>
        fetch(`${API_BASE_URL}/users/${id}`).then(res => res.json()),
    
    getUsers: () =>
        fetch(`${API_BASE_URL}/users`).then(res => res.json()),
    
    createUser: (data: any) =>
        fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json()),
    
    updateUser: (id: string, data: any) =>
        fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then(res => res.json()),
    
    deleteUser: (id: string) =>
        fetch(`${API_BASE_URL}/users/${id}`, { method: 'DELETE' }).then(res => res.json()),
};

export default userApi;