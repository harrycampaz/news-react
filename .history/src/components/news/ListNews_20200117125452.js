import React from 'react';
import News from './News';

const ListNews = ({news}) => {
    return (
        <div className="row">
            {news.map(newsItem => {
               return <News key={newsItem.url} newsItem ={newsItem} />
            })}
        </div>
    );
};

export default ListNews;