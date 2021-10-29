import './Shipping.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Cart from '../cart/Cart';
import useProducts from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { useHistory } from 'react-router';
import { clearDb, getStoredDb } from '../../utilities/LocalStorage';

const Shipping = () => {

  const [products,setProducts]=  useProducts();
    const [cart,setCart]=useCart();
    const history= useHistory();

 const {user}= useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const savedCart= getStoredDb();
    data.order=savedCart;

    fetch('http://localhost:5000/orders',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(data)

    })
    .then(res=>res.json())
    .then(result=>{
      if (result.insertedId) {
        alert('Order Placed Successfully !')
        console.log(result); 
        clearDb();
        const url='/orderplace';
        history.push(url);
      }
      
      

      
    })

  } 

  // const url='/orderplace';
  // const orderPlace=()=>{
  //   history.push(url);
  //   clearDb();

  // }

    return (
      
      <div className="d-flex justify-content-around align-items-center">
      <form className="shipping-form text-start" onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={user.displayName}{...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />

      <input placeholder="Address"  {...register("address")} />

      <input placeholder="Phone"  {...register("phone")} />
      {errors.email && errors.phone && <span  className="error">This field is required</span>}
      
      <input type="submit"  />
    </form>

    <div style={{borderLeft:'2px solid gray',paddingLeft:'20px'}}>
   
    <Cart cart={cart}></Cart>
    </div>

    

    </div>
    );
};

export default Shipping;