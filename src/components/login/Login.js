import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="m-5">
            <Form className="container text-start m-5 w-50 mx-auto shadow-lg rounded-3 p-4 mt-3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3"             controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="d-flex justify-content-center">
                <Button className="btn btn-primary px-4 fw-bold" type="submit">Login</Button>

                </div>
               
            </Form>

            <Link to='/register'>
            <button style={{backgroundColor:"#f0c14b",padding:'5px 10px',borderRadius:'5px'}} className="fw-bold">Create Your Ema-jone Account</button>
            </Link>


            
        </div>
    );
};

export default Login;