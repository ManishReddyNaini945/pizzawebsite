import React, { useEffect ,useState} from 'react'
import ShopingCartItem from "./ShopingCartItems"
import "../index.css"
import { Link } from 'react-router-dom'


const ShopingCart = () => {
  const [cartlist,setCartlist]=useState(JSON.parse(localStorage.getItem("pizzaitems")))


 

  const[price,setPrice]=useState(0)
 
  const  getTotalPrice=()=>{
    let amount=0
    cartlist.map(item=>(
      amount=amount+(item.price*item.quantity)
    ))
    setPrice(amount)
  }
  useEffect(()=>{
    getTotalPrice()
  })
  const removeitem=(items)=>{
    let copycartlist=[...cartlist]
    copycartlist=copycartlist.filter(item=>item.id!==items.id)
    setCartlist(copycartlist)
    localStorage.setItem("pizzaitems",JSON.stringify(copycartlist))
  
    


  }
  const increment=(item,d)=>{
    let ind=-1
    cartlist.forEach((data,index)=>{
      if(data.id===item.id){
        ind=index
        
        

      }
    })
    
    const temparr=cartlist
  
    temparr[ind].quantity+=d
    if(temparr[ind].quantity===0){
      temparr[ind].amount=1;

    }else{
      setCartlist([...temparr])
    }
  }
  const decrement=(item,d)=>{
    let ind=-1
    cartlist.forEach((data,index)=>{
      if(data.id===item.id){
        ind=index
        
        

      }
    })
    
    const temparr=cartlist
  
    temparr[ind].quantity+=d
    if(temparr[ind].quantity===0){
      temparr[ind].amount=1;

    }else{
      setCartlist([...temparr])
    }
  }

  
  return (
    <div>
      {cartlist.length>0?cartlist.map((eachitem)=>{
        return <ShopingCartItem items={eachitem} id={eachitem.id} removeitem={removeitem} increment={increment} decrement={decrement} />
          

      }):
      <div className='no-items'>
        <h1>"No items in the cart"</h1>
        <Link to="/menu" className='order-link'>
          <button className='order-btn'>
          Add it now

          </button>
          </Link>
        </div>
      }
      <div className='total-container'>
      <h1 className='total-price'>Total Price:${price}</h1>
      </div>
      
    </div>
  )
}

export default ShopingCart