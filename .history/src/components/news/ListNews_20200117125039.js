import React from 'react';
import News from './News';

const ListNews = ({news}) => {
    return (
        <div className="row">
            {news.map(newsItem, i => {
               return <News key={i} newsItem ={newsItem} />
            })}
        </div>
    );
};

export default ListNews;