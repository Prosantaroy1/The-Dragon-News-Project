import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    const {SignIn} =useContext(AuthContext);
    //login sucessfullyb hole home niye jaoyar jonno
     const navigate = useNavigate();
     ///login korle jen view a jai
     let location = useLocation();
     let from = location.state?.from?.pathname || "/";

    const handleSignIn =event=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password = form.password.value;
        
        //
        SignIn(email, password)
          .then(result=>{
              const signin = result.user;
              console.log(signin)
              navigate(from, {replace: true})
          })
          .catch(error=>{
             console.log(error);
          })
    }

    return (
        <Container className='mx-auto w-25'>
           <h2>Login your account</h2>
        <Form onSubmit={handleSignIn}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name='email' placeholder="Enter email" />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" name='password' placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit" className='w-100'>
           Submit
         </Button>
         <br />
         <Form.Text className="text-success">
                Don't Have an Account? <Link to='/register'>Register </Link>
           </Form.Text>
         <Form.Text className="text-success">
           
           </Form.Text>
         <Form.Text className="text-danger">
              
           </Form.Text>
       </Form>
        </Container>
    );
};

export default Login;