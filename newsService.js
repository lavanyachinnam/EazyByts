import { fetchNews } from './api';

export const getNews = async () => {
    try {
        const news = await fetchNews();
        return news;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return [];
    }
};
