import { useEffect, useState } from "react";
import { getStoredDb } from "../../utilities/LocalStorage";


const useCart=(products)=>{
    const [cart,setCart]=useState([]);
    // console.log(products);

    useEffect(()=>{

        const storedDb=getStoredDb();
        // console.log(storedDb);

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
        
        
    },[ products]);

    // console.log(cart);

    return [cart,setCart];


}
export {useCart};

