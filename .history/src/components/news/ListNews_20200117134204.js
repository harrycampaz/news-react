import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
    return (
        <div className="row">
            {news.map(newsItem => {
               return <News key={newsItem.url} newsItem ={newsItem} />
            })}
        </div>
    );
};

ListNews.propTypes = {
    titulo: PropTypes.array.isRequired
};


export default ListNews;