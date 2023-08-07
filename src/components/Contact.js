import React from 'react'
import leftimg from "../assests/pizzaLeft.jpg"
import "../index.css"
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Contact = () => {
  const[data,setData]=useState({fullname:"",email:"",message:""})
  const{fullname,email,message}=data

  const onChangeHandler=event=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  const onSubmitHandler=event=>{
      event.preventDefault();
      fetch("https://userdata-3782f-default-rtdb.firebaseio.com/data.json",
      {
      method:"POST",
      body:JSON.stringify(data),
      headers:{
          "Content-Type":"application/json; charset=UTF-8"
      }
      }
      
      ).then(response=>alert("data posted")).catch(err=>console.log(err))
  }
  return (
    <>
    <Navbar />
    <div className='contact'>
        <div className='left' style={{backgroundImage:`url(${leftimg})`}}>
           

        </div>
        <div className='right'>
            <h1>Contact Us</h1>
            <form onSubmit={onSubmitHandler}>
             
                <input type='text' name="fullname" placeholder='Enter your fullname' value={fullname} className='user-input' onChange={onChangeHandler}/><br/>
                
                <input type='email' name="email" placeholder='Enter your email' value={email} className='user-input'  onChange={onChangeHandler}/><br/>
              
               <textarea rows="6" placeholder='Enter your Message' className='user-input' value={message} name='message'  onChange={onChangeHandler}></textarea><br/>
               <input type='submit' value="Send Message" className="send-btn"/>
            </form>

        </div>

    </div>
    <Footer />
    </>
  )
}

export default Contact