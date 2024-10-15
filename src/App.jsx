// import { useState } from 'react'
import './App.css'
import TopNav from './Components/Navbar/TopNav'
import Home from './pages/Home'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import Register from './pages/Register'
import Login from './pages/Login'


import Cart from './pages/cart'



function App() {
  

  return (   
    <BrowserRouter>
    <TopNav/>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/Login" element={<Register/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    
   
    </BrowserRouter>
  )
}

export default App
