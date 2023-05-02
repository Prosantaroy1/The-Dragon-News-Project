import React, {  useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

   const { createUser } = useContext(AuthContext);

  const handleCreateUser = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);
    //create new user
    createUser(email, password)
      .then(result=>{
          const createdUser = result.user;
          console.log(createdUser);
      })
      .catch(error=>{
         console.log(error);
      })

  }


    return (
    <Container className='mx-auto w-25'>
    <h2>Register your account</h2>
     <Form onSubmit={handleCreateUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name='email' placeholder="Enter email" />
          </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" name='password' placeholder="Password" />
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Term & Conditions" />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-100'>
        Submit
      </Button>
      <br />
      <Form.Text className="text-success">
             Already Have an Account? <Link to='/login'>Login </Link>
        </Form.Text>
      <Form.Text className="text-success">
        
        </Form.Text>
      <Form.Text className="text-danger">
           
        </Form.Text>
      </Form>
     </Container>
    );
};

export default Register;