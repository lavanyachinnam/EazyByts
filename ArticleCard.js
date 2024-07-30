import React from 'react';
import './ArticleCard.css'; // Optional: for additional styling

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><em>{article.author}</em></p>
        </div>
    );
};

export default ArticleCard;
