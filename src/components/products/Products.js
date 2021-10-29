import './Products.css';
import { FormControl, InputGroup, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addtodb } from '../../utilities/LocalStorage';
import Cart from '../cart/Cart';
import { useCart } from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from '../product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cartelement = <FontAwesomeIcon icon={faShoppingCart} />

const Products = () => {
    // const [products]=useProducts();
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useCart();

    const [displayProducts,setDisplayProducts]= useState([]);
    // const [displayProducts,setDisplayProducts]= useProducts();


    const  [pageCount,setPageCount]= useState(0);
    const [page,setPage]=useState(0);
    const size=10;
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            setDisplayProducts(data.products);
            const count=data.count;
            const pageNumber=Math.ceil(count/size);
            setPageCount(pageNumber);
        })

    },[page]);



    //  console.log([...Array(pageCount).keys()]);

  
    const addcartHandeler=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        // console.log(newCart);
        addtodb(product.key);

    }

    // search products
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
                    
                   <Link to="/cart">{cartelement} A</Link>
                   
            </InputGroup>

            </section>

        <section className="row mx-auto">
        
            <Row lg={1} className="col-9 me-1 px-2 ">
                
                <div>
                {displayProducts.map(product=><Product key={Math.random()} product={product} addcartHandeler={addcartHandeler}></Product>)}

                </div>
                
                <div className="my-5 pagination">
                    
                {[...Array(pageCount).keys()].map(number=><button className={number===page ? 'selected' : ''} key={number} onClick={()=>setPage(number)}>{number+1}</button>)}

                </div>
            </Row>

            <div style={{borderLeft:'2px solid black'}} className="col-3">
                <Cart cart={cart}>
                    <Link to='/order'>
                        <button style={{backgroundColor:"#f0c14b"}} className="btn px-5 fs-6 fw-bold mt-5">Review Order</button>

                    </Link>
                    
                
                </Cart>
            </div>  
        </section>
        

        </>
    );
};

export default Products;