import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/Navigation/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <Container>
              <Row>
                 <Col lg={3}>
                    <LeftNav/>
                 </Col>
                 <Col lg={6}>
                    <Outlet/>
                 </Col>
                 <Col lg={3}>
                    <RightNav/>
                 </Col>
               </Row>
            </Container>
      
            <Footer/>
        </div>
    );
};

export default Main;