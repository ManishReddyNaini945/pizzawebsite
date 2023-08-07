import React, { useState } from 'react'
import Pepperoni from "../assests/pepperoni.jpg";
import Margherita from "../assests/margherita.jpg";
import PedroTechSpecial from "../assests/pedrotechspecial.jpg";
import Vegan from "../assests/vegan.jpg"
import Pineapple from "../assests/pineapple.jpg"
import Expensive from "../assests/expensive.jpg"
import MenuItem from './MenuItem';
import "../index.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Cheese from "../assests/cheese.jpg"
import Onion from "../assests/onionpizzza.jpg"
import Grape from "../assests/grapepizza.jpg"
import Italian from "../assests/italianpizza.jpg"
import hampizza from "../assests/hampizza.jpg"
import Panner from "../assests/pannerpizza.jpg"



export const MenuList = [
  {
    id:1,
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
    quantity:1,
  },
  {
    id:2,
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
    quantity:1,
  },
  {
    id:3,
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 256.53,
    quantity:1,
  },
  {
    id:4,
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
    quantity:1,
  },
  {
    id:5,
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 4.99,
    quantity:1,
  },
  {
    id:6,
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 1997.99,
    quantity:1
  },
  {
    id:7,
    name:"Cheese Pizza",
    image:Cheese,
    price:20.19,
    quantity:1
  },
  {
    id:8,
    name:"Onion Pizza",
    image:Onion,
    price:10.19,
    quantity:1
  },
  {
    id:9,
    name:"Italian Pizza",
    image:Italian,
    price:22.19,
    quantity:1
  },
  {
    id:10,
    name:"Ham Pizza",
    image:hampizza,
    price:30,
    quantity:1
  },
  {
    id:11,
    name:"Grape Pizza",
    image:Grape,
    price:23,
    quantity:1
  },
  {
    id:12,
    name:"Panner Pizza",
    image:Panner,
    price:25,
    quantity:1
  },

];

const Menu = () => {
  const[cartlist,setCartlist]=useState([])
  const[added,setAdded]=useState(false)
  const handleclick=(item)=>{
    
    let copycartlist=[...cartlist]
    const index=copycartlist.findIndex(eachitem=>eachitem.id===item.id)
    if(index===-1){
      copycartlist.push(item)
      setCartlist(copycartlist)
      localStorage.setItem("pizzaitems",JSON.stringify(copycartlist))

    }else{
      alert("This item is already there in cart")
    }
   
   
    setTimeout(()=>{
      setAdded(false)

    },2000)
    setAdded(true)
   
    
    
  }
  
   

  
  
  return (
    <>
    <Navbar />
    <div className='menu-container'>
        {added?<div className='message-container'><h1 className='message'>Added Successfully</h1></div>:null}
        <h1 >Our Menu</h1>
        
        
        <ul className='items-container'>
        {MenuList.map((eachItem)=>{
            return <MenuItem item={eachItem} id={eachItem.id} handleclick={handleclick} added={added}/>
        })}
       
        

        </ul>
       
       
     
       
    </div>
    <Footer />
    </>
  
  )
}

export default Menu