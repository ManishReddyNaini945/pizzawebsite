import React, { useState } from 'react'

const ShopingCartItems = (props) => {
    const{items,id,removeitem,increment,decrement}=props 
    const{name,image,price,quantity}=items
   
   

  return (
   





        
    <div className='item-container' key={id}>
         <div className='first-container'>
            <img src={image} alt='img' className='cart-image'/>
        
       
            <p className='brand-name'>{name}</p>
         
        </div>
        <div className='second-container'>
            <button onClick={()=>increment(items,+1)}>+</button>{" "}
            <button >{quantity}</button>{" "}
            <button onClick={()=>decrement((items,-1))}>-</button>
        </div>
        <div className='third-container'>
            <p className='cart-price'>{` Price:$${price}`}</p>
            <button className='remove-btn' onClick={()=>removeitem(items)}>Remove from cart</button>
        </div>
        
    </div>


    

    
  )
}

export default ShopingCartItems