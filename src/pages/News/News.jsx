import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditotSide from './EditorSide/EditotSide';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details, image_url, category_id} = news;
    return (
        <div>
             <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
             <Card.Title>{title}</Card.Title>
            <Card.Text>
               {details}
            </Card.Text>
           <Link to={`/categories/${category_id}`}>
             <Button variant="danger"><FaArrowLeft/> News in this category</Button>
           </Link>
           </Card.Body>
         </Card>
         <EditotSide/>
        </div>
        
    );
};

export default News;