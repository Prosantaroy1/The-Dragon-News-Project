import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);
 
    //logout 
    const handleLogOut = ()=>{
      logOut()
       .then()
       .catch(error =>{
         console.log(error)
       })
    }

    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2 mb-4'>
               <Container>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="mx-auto">
                    
                       <Link to="/">Home</Link>
        
                     <Nav.Link href="#pricing">About</Nav.Link>
                     <Nav.Link href="#pricing">Career</Nav.Link>
                   </Nav>
                   <Nav>
                     
                       {user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}
    
                       {
                        user ?
                          <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                          <Link to="/login">
                             <Button variant="secondary">Login</Button>{' '}
                          </Link>
                       }
                  
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>
        </Container>
    );
};

export default NavigationBar;