import './Shipping.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Cart from '../cart/Cart';
import useProducts from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { useHistory } from 'react-router';
import { clearDb } from '../../utilities/LocalStorage';

const Shipping = () => {

  const [products,setProducts]=  useProducts();
    const [cart,setCart]=useCart(products);
    const history= useHistory();

 const {user}= useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data);

  } 

  const url='/orderplace';
  const orderPlace=()=>{
    history.push(url);
    clearDb();

  }

    return (
      
      <div className="d-flex justify-content-around align-items-center">
      <form className="shipping-form text-start" onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={user.displayName}{...register("name")} />
      <input defaultValue={user.email} {...register("email", { required: true })} />

      <input placeholder="Address"  {...register("phone")} />

      <input placeholder="Phone" defaultValue="" {...register("phone")} />
      {errors.email && errors.phone && <span  className="error">This field is required</span>}
      
      <input onClick={orderPlace}  type="submit"  />
    </form>

    <div style={{borderLeft:'2px solid gray',paddingLeft:'20px'}}>
   
    <Cart cart={cart}></Cart>
    </div>

    

    </div>
    );
};

export default Shipping;