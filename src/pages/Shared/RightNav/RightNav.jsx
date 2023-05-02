import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <h4>LogIn With News</h4>
            <div className='d-block'>
             <Button variant="outline-primary" className='d-block mb-2 w-100'><FaGoogle/> Primary</Button>{' '}
             <Button variant="outline-secondary"className='d-block mb-2 w-100'><FaGithub/> Secondary</Button>{' '}
            </div>
            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup className='gap-3'>
                    <ListGroup.Item ><FaFacebook/> Facebook </ListGroup.Item>
                    <ListGroup.Item ><FaInstagram/> Instragram </ListGroup.Item>
                    <ListGroup.Item ><FaTwitter/> Twitter </ListGroup.Item>
                 </ListGroup>    
            </div>
            <Qzone/>
            <div className='right-last-part text-center px-4 py-3 text-light mt-4'>
                <h2 className='mb-2'>
                   Create an<br/> Amazing<br/> Newspaper
                </h2>
                <p>
                   Discover thousands of options, easy to customize layouts, 
                   one-click to import demo and much more.
                </p>
                <Button variant="danger">Danger</Button>{' '}
            </div>
        </div>
    );
};

export default RightNav;