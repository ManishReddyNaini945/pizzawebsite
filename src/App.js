import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'

import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import ShopingCart from './components/ShopingCart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     
      <Routes>
     
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/cart' element={<ShopingCart />}/>
      </Routes>
    
      </BrowserRouter>
    </div>
  )
}

export default App