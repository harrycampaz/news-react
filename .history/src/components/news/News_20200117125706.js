import React from 'react';

const News = ({newsItem}) => {

    const {title, urlToImage, url, description, source } = newsItem;

    return (
        <div>
<p>{title}</p>
        </div>
    );
};

export default News;