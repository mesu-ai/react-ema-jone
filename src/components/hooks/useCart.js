import { useEffect, useState } from "react";
import { getStoredDb } from "../../utilities/LocalStorage";


const useCart=()=>{
    const [cart,setCart]=useState([]);
    // console.log(products);

    useEffect(()=>{

        const storedDb=getStoredDb();
        //  console.log(storedDb);
          const keys=Object.keys(storedDb);
         // console.log(keys);
          fetch('http://localhost:5000/products/byKeys',{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(keys)

          })
          .then(res=>res.json())
          .then(products=>{
            //   console.log(products)
         

       const newCart=[];
       
        if(products.length){
            for (const key in storedDb) {
              //  console.log(key);
                const addedProduct=products.find(product=>product.key===key);
               // console.log(addedProduct);
                if(addedProduct){


                    const quantity=storedDb[key];
                    addedProduct.quantity=quantity;
                    newCart.push(addedProduct);

                }    
                
            }
            
            setCart(newCart);
        }

    })
        
    },[]);

    // console.log(cart);

    return [cart,setCart];


}
export {useCart};

