import React from 'react'
import "../index.css"

const MenuItem = (props) => {
    const{item,id,handleclick,added}=props 
    const{name,image,price}=item
  return (
    <div className='menu-item' key={id}>
        <img src={image} alt={name} className='image'/>
        <h1 className='menu-name'>{name}</h1>
        
        <p className='price'>${price}</p>
        <button className='cart-btn' onClick={()=>handleclick(item)}>Add to cart</button>
      

       
        

    </div>
  )
}

export default MenuItem