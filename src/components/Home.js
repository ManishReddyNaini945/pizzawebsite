import React, { useEffect } from 'react'
import banner from "../assests/pizza.jpeg"
import {Link} from "react-router-dom"
import "../index.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom'

const Home = () => {
 
  



 

 
  

 
 
  return (
    <>
    <Navbar />
    <div className='home'  style={{backgroundImage:`url(${banner})`}}>
      <div className='header-container'>
        <h1>Manish's Pizzeria</h1>
        <p>PIZZA To FIT ANY TASTE</p>
        <Link to="/menu" className='order-link'>
          <button className='order-btn'>
          ORDER NOW

          </button>
          </Link>
        </div>


    </div>
    <Footer />
    </>
  )
}

export default Home