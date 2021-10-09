const addtodb=(id)=>{
    // console.log(id);

    const exists=localStorage.getItem('shopping_cart');
    let shopping_cart={};
    if(!exists){
        shopping_cart[id]=1;
    }else{
        shopping_cart=JSON.parse(exists);
        
        if(shopping_cart[id]){
            const newCount=shopping_cart[id]+1;
            shopping_cart[id]=newCount;
            
        }else{
            shopping_cart[id]=1;
        }
    }

    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));

}

const revomeFromDb=(id)=>{
    const exists=localStorage.getItem('shopping_cart');
    if(!exists){
        
    }else{
        const shopping_cart=JSON.parse(exists);
        delete shopping_cart[id];

        localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart));

    }
}

const getStoredDb=()=>{

    const exists=localStorage.getItem('shopping_cart');

    return exists?JSON.parse(exists):{};


}

const clearDb=()=>{
    const exists=localStorage.getItem('shopping_cart');
    return exists? localStorage.removeItem('shopping_cart'):{};

}
export {addtodb,revomeFromDb,getStoredDb,clearDb};