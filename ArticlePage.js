import React from 'react';

const ArticlePage = ({ article }) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p><em>{article.author}</em></p>
        </div>
    );
};

export default ArticlePage;
