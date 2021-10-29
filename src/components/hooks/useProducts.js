import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    const [displayProducts,setDisplayProducts]= useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            setDisplayProducts(data.products);

            })

        },[]);

        // console.log(pageCount);
    return [products,setProducts,displayProducts,setDisplayProducts];


}


export default useProducts;