import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title, details, image_url, author, rating, total_view} = news;
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex gap-2 align-items-center'>
           <Image style={{width: '40px'}} src={author?.img} roundedCircle />
           <div className='flex-grow-1 pt-3'>
              <p className='mb-0'>{author?.name}</p>
              <p><small>{moment(author?.publised_date).format('yyy-MM-D')}</small></p>
           </div>
           <div>
               <FaRegBookmark/> <FaShareAlt/>
           </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? <>{details}</>: 
            <>{details.slice(0, 250)}....<Link to={`/news/${_id}`}>Read More..</Link></>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
            <div className='flex-grow-1'>
               <Rating
                 readonly
                 placeholderRating={rating.number}
                 emptySymbol={<FaRegStar/>}
                 placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                 fullSymbol={<FaStar/>}
               />
                <span className='ps-1'>{rating?.number}</span>
            </div>
            <div>
                <FaEye/> {total_view}
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;