import React from 'react';


const Cart = (props) => {
    console.log(props);
    console.log(props.children);
    const {cart}=props;


    let price=0
    let totalquantity=0
    

    for (const product of cart) {

        if(!product.quantity){
            product.quantity=1;
        }
        totalquantity=totalquantity+product.quantity;
        price=price+product.price*product.quantity;


    }

    const shipping =price > 0 ? 50: 0;
    const tax= (price+shipping)*.15;
    const totalPrice= price+shipping+tax;

    

    return (
        <div className="mt-3">
            <h3 className="text-primary">Payment Cart</h3><hr />

           <p>Quantity: {totalquantity} </p> 
           <p>Price: {price.toFixed(2)} </p>
           <p>Shipping Cost : {shipping} </p>
           <p>Tax: {tax.toFixed(2)} </p>
           
           <hr />
           <p>Total Price: {totalPrice.toFixed(2)} </p>
           
           {props.children}




            
            
        </div>
    );
};

export default Cart;