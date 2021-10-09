import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OrderProduct = (props) => {

    
    const {key,name,price,seller,quantity,image,shipping}=props.product;
    


    return (
    
            <Col>
                <section style={{backgroundColor:"white"}} className="row m-3 p-3 shadow-lg">

                    <Col className="col-3">
                    <img  src={image}  alt=""/></Col>

                    <Col className="col-9">
                        <div className="text-start ms-3">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{seller}</Card.Text>
                            <Card.Text>$ {price}</Card.Text>
                            <Card.Text> {quantity}</Card.Text>

                        </div>

                         <div className="row row-cols-2">
                             <div>
                                 
                                
                                <button onClick={()=>props.removeCartHandaler(key)} style={{backgroundColor:"#f0c14b"}} className="btn px-5 fs-6 fw-bold mt-5">Remove From Cart</button>

                             </div>
                        <div>

                            {shipping}



                        </div>
                                    
                            

                        </div> 
                    </Col>
                
                </section>
            </Col>
            
    );
};

export default OrderProduct;