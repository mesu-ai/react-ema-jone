import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    return (

        <div className="m-5">

        <h3>Create Your Account</h3>
        <Form className="container text-start w-50 mx-auto border shadow-lg rounded-3 p-4 mt-3">
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3"             controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3"             controlId="formGroupPassword">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-Enter Password" />
        </Form.Group>

        <div className="d-flex justify-content-center">
        <Button className="btn btn-primary px-4 fw-bold" type="submit">Register</Button>

        </div>
       
    </Form>

    </div>
    );
};

export default Register;