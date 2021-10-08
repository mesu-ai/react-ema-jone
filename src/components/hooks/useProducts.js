import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    const [displayProducts,setDisplayProducts]= useState([]);
    useEffect(()=>{
        fetch('./productsdb.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .then(data=>setDisplayProducts(data))
    },[]);

    return [products,setProducts,displayProducts,setDisplayProducts];


}


export default useProducts;