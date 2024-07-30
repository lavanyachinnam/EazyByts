const API_URL = 'http://localhost:8080/api'; // Adjust based on your backend

export const fetchNews = async () => {
    const response = await fetch(`${API_URL}/news`);
    return response.json();
};
