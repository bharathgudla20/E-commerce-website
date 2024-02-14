const bar = document.getElementById('bar');
const nav=document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

function add(productId,productImg,productName,productCost,productQuantity,productSubtotal){
    
    const obj={
        product_id:productId,
        product_image:productImg,
        product_name:productName,
        product_cost:productCost,
        product_quantity:productQuantity,
        product_subtotal:productSubtotal,
    };
    
    localStorage.setItem('cartItem', JSON.stringify(obj));
    
    
   
}

function add2(productId,productImg,productName,productCost,productQuantity,productSubtotal){
    
    const obj2={
        product_id:productId,
        product_image:productImg,
        product_name:productName,
        product_cost:productCost,
        product_quantity:productQuantity,
        product_subtotal:productSubtotal,
    };
    
    localStorage.setItem('cartItem2', JSON.stringify(obj2));
    
    
    
}


