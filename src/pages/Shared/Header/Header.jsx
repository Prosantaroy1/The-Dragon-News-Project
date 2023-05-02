import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, } from 'react-bootstrap';



const Header = () => {

    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondry'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light'>
              <Button variant="danger">Danger</Button>{' '}
              <Marquee speed={100} className='text-danger'>
                  I can be a React component, multiple React components, or just some text.
                  I can be a React component, multiple React components, or just some text.
                  some this more.......
               </Marquee>
            </div>
          
        </Container>
    );
};

export default Header;