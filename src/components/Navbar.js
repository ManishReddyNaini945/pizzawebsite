import React, { useEffect,useState } from 'react'
import img from "../assests/pizzaLogo.png"
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../index.css"


const Navbar = () => {
  const[openLinks,setOpenLinks]=useState(false)
  const[length,setLength]=useState(0)
  const onClickHandler=()=>{
    setOpenLinks(!openLinks)
  }
  useEffect(()=>{
    
    let getcartlist=JSON.parse(localStorage.getItem("pizzaitems"))
    setLength(getcartlist.length)
   

  },[])
 
   




  return (
    <div className='nav-bar'>
        <div className='left-side'>
            <img src={img} className='logo-png' alt='logo'/>
           
            <div className='mobile-navigate-btn'>
        <button className='btn' onClick={onClickHandler}>
                <ReorderIcon />

                </button>

                </div>
        </div>
        <div id={openLinks?"open" :"close"}>
        <div className='mobile-links'  >
            <Link to="/" className='route-link'>Home</Link>
                <Link to="/about" className='route-link'>About</Link>

                <Link to="/menu" className='route-link'>Menu</Link>
                <Link to="/contact" className='route-link'>Contact</Link>
                <Link to="/cart" className='route-link'>
                  <ShoppingCartIcon />
                  <span className='size'>{length}</span>
                </Link>
                
                </div>

        </div>
            
           
            
            <div className='right-side'>
                <Link to="/" className='route-link'>Home</Link>
                <Link to="/about" className='route-link'>About</Link>

                <Link to="/menu" className='route-link'>Menu</Link>
                <Link to="/contact" className='route-link'>Contact</Link>
                
                <Link to="/cart" className='route-link'>
                  <ShoppingCartIcon />
                  <span className='size'>{length}</span>
                </Link>
                
              
                
           
            
        </div>
        
     
    

     
    </div>
  )
}

export default Navbar