import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import ProductCard from './ProductCard'
import img1 from '../../assets/Sweets/holige.jpg'
import img2 from '../../assets/Tea/Ginger_lemon.jpg'
import img3 from '../../assets/Tea/Jaggeri_Tea.jpg'
import img4 from '../../assets/Sweets/Kardantu.jpg'
import img5 from '../../assets/Sweets/shankarpalya.jpg'
import img6 from '../../assets/Tea/lota.jpg'
import img7 from '../../assets/Tea/matka_chai.jpg'


// product details 
const ProductsData =[
  {
    id: 1,
    img: img1,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 2,
    img: img2,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 3,
    img: img3,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 4,
    img: img4,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 5,
    img: img5,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 6,
    img: img6,
    title: "Holige",
    Price:"20 rs",
  },
  {
    id: 7,
    img: img7,
    title: "Holige",
    Price:"20 rs",
  },
];

const Products = () => {
   
  return (
   <div>
     <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
        <h2 className='titile items-center text-center pb-8 pt-12 text-3xl  text-pramary'>Our Special Dishes</h2>  
        {/* { product carts} */}

        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items center space-y-3 mb-6'>

            {/* {all btns for filtering option} */}
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-1.8xl '>
                <button>All </button>
                <button>Sweets</button>
                <button>Snacks</button>
                <button>Tea</button>
            </div>

            {/* {filter option} */}
            <div className='flex justify-end mb-4 rounded-sm'>
                <div className='bg-black p-2'>
                    <FaFilter className='text-white h-4 w-4'/>
                </div>
                <select className='bg-black text-white px-2 py-1 rounded-sm'>
                <option value="default">Default</option>
                <option value="A-Zt">A-Z</option>--
                <option value="Z-At">Z-A</option>
            </select>
            </div>
         </div>
    
    
    </div>

    {/* // {product list with cart button} */}
    < ProductCard data ={ProductsData}/>
   </div>
  )
}

export default Products