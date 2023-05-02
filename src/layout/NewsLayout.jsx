import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
             <div>
            <Header/>
            <Container>
              <Row>
                 <Col lg={9}>
                    <Outlet/>
                 </Col>
                 <Col lg={3}>
                    <RightNav/>
                 </Col>
               </Row>
            </Container>
      
            <Footer/>
        </div>
        </div>
    );
};

export default NewsLayout;