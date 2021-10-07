import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import Features from '../features/Features';

const Product = (props) => {
    
    const {name,price,seller,star,stock,image,features}=props.product;
    


    return (
    
            <Col>
                <section style={{backgroundColor:"white"}} className="row m-3 p-3 shadow-lg">

                    <Col className="col-3">
                    <img  src={image}  alt=""/></Col>

                    <Col className="col-9">
                        <div className="text-start ms-3">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{seller}</Card.Text>

                        </div>

                         <div className="row row-cols-2">
                             <div>
                                <Card.Text>$ {price}</Card.Text> 
                                <Card.Text>Only {stock} left in stock - Order Soon </Card.Text>
                                <button style={{backgroundColor:"#f0c14b"}} className="btn px-5 fs-6 fw-bold">Add To Cart</button>

                             </div>
                             <div>
                                
                                <Rating
                                initialRating={star}
                                readonly
                                    emptySymbol="far fa-star text-warning"
                                    fullSymbol="fas fa-star text-warning"
                                />
                                <ol>
                                    
                                    {
                                    features.map(feature=><li><Features key={Math.random()} feature={feature}></Features></li>)
                                    }
                                    
                                    
                                </ol>
                                

                             </div>
                                    
                            

                        </div> 
                    </Col>
                
                </section>
            </Col>
            
    );
};

export default Product;