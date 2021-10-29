import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { clearDb, revomeFromDb } from '../../utilities/LocalStorage';
import Cart from '../cart/Cart';
import { useCart } from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import OrderProduct from '../orderProduct/OrderProduct';

const Order = () => {
    const [products,setProducts]=  useProducts();
    const [cart,setCart]=useCart();
    const history= useHistory();

  
    const removeCartHandaler=(key)=>{
       const newCart= cart.filter(product=>product.key !==key);
       setCart(newCart);
       revomeFromDb(key);

    }

    const url=`/shipping`;
    const handleOrderPlace=()=>{
        // clearDb();
        history.push(url);

    }


    return (
        <div>

<section className="row mx-auto">
        
        <Row lg={1} className="col-9 me-1 px-2">
            {cart.map(product=><OrderProduct key={Math.random()} product={product} removeCartHandaler={removeCartHandaler}></OrderProduct>)}
        </Row>

        <div style={{borderLeft:'2px solid black'}} className="col-3">
            <Cart cart={cart} > 
                <button onClick={handleOrderPlace} style={{backgroundColor:"#f0c14b"}} className="btn px-5 fs-6 fw-bold mt-5">Proceed To Order</button>
            
             </Cart>
        </div>

        
        
    </section>
            
       </div>
    );
};

export default Order;