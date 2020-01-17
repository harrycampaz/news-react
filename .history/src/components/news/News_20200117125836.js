import React from 'react';

const News = ({newsItem}) => {

    const {title, urlToImage, url, description, source } = newsItem;

    return (
        <div className ="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <imr source
                </div>

            </div>
<p>{title}</p>
        </div>
    );
};

export default News;