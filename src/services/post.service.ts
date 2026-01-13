// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// API calls
const postApi = {
    getPosts: () =>
        fetch(`${API_BASE_URL}/posts`).then(res => res.json()),
};

export default postApi;