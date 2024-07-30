import React, { useEffect, useState } from 'react';
import { getNews } from '../services/newsService';
import ArticleCard from './ArticleCard';

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getNews().then(data => setArticles(data));
    }, []);

    return (
        <div className="news-feed">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};

export default NewsFeed;
