import React from 'react';
import Logo from '../../assets/logo.png'
import { FaShoppingCart, FaUser, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
//import './TopNav.css';


const TopNav = () => {
  return (
    <nav className="shadow-md bg-white dark:bg-gr
    ay-800 dark:text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-auto px-4 md:px-16 lg:px-24">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" ><img className="h-25 w-8" src={ Logo } alt="commerce logo" /></Link>
   
          </div>   

           {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            {< Link to="/Sweets" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sweets</Link>}
            < Link to="/Tea" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Tea</Link>
            <Link to="/Snacks" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Snacks</Link>
            <Link to="/About" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
           <Link to="/Cart" ><FaShoppingCart/></Link>
           <Link to="./Login"><button className='hidden md:block'>Login |</button></Link>
           <Link to="./Register"><button className='hidden md:block'>Register</button></Link>

           <button className='block md:hidden'><FaUser/></button>
          </div>
        </div>
      </div>
    </nav>
  )
   
  ;
}

export default TopNav;
