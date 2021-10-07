
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart from '../cart/Cart';
import useProducts from '../hooks/useProducts';
import Product from '../product/Product';

const Products = () => {
    const [products]=useProducts();
    // console.log(products);


    return (
        <section className="row mx-auto">
        
            <Row lg={1} className="col-9 me-1 px-2">
                {products.map(product=><Product key={Math.random()} product={product}></Product>)}
            </Row>

            <div style={{borderLeft:'2px solid black'}} className="col-3 bg-danger"><Cart></Cart></div>

            
            
        </section>
    );
};

export default Products;