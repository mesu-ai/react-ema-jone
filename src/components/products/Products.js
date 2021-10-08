
import Button from '@restart/ui/esm/Button';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addtodb } from '../../utilities/LocalStorage';
import Cart from '../cart/Cart';
import { useCart } from '../hooks/useCart';



import useProducts from '../hooks/useProducts';
import Product from '../product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cartelement = <FontAwesomeIcon icon={faShoppingCart} />

const Products = () => {
    const [products]=useProducts();
    const [cart,setCart]=useCart(products);
    const [displayProducts,setDisplayProducts]= useProducts();
    // console.log(products);

   
    
    const addcartHandeler=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        // console.log(newCart);
        addtodb(product.key);

    }

    const handleSearch=(event)=>{
    const searchText= event.target.value;

    const findProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(findProduct);
    console.log(displayProducts.length);

    }


    return (
        <>

        {/* search bar */}
        <section style={{backgroundColor:'#222'}} className="p-4">
            <InputGroup className="w-50 mx-auto">
                <FormControl
                    placeholder="Search Products"
                    aria-label="search-procucts"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                    />
                    {/* <Button className="btn btn-primary px-5" id="button-addon2">
                    Search
                   </Button> */}
                   <Link to="/cart">{cartelement} A</Link>
                   
            </InputGroup>

            </section>

        <section className="row mx-auto">
        
            <Row lg={1} className="col-9 me-1 px-2">
                {displayProducts.map(product=><Product key={Math.random()} product={product} addcartHandeler={addcartHandeler}></Product>)}
            </Row>

            <div style={{borderLeft:'2px solid black'}} className="col-3"><Cart cart={cart} ></Cart></div>

            
            
        </section>

        </>
    );
};

export default Products;