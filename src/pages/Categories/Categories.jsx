import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categories = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            {id && <h2>this category : {categoryNews.length} </h2>}
            {
                categoryNews.map(news => <NewsCard
                key={news.id}
                news={news}
                >
                    
                </NewsCard>)
            }
        </div>
    );
};

export default Categories;