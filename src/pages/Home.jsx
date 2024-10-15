import React from 'react'
import InfoSection from '../Components/InfoSection'
import CategorySec from '../Components/CategorySec'
import Products from '../Components/products/Products'
import WelcomeAside from '../Components/WelcomeAside'


const Home = () => {
  return (
    <div>
      <WelcomeAside/>
      <InfoSection/>
      <CategorySec/>
     <Products/>
    
    </div>
  )
}

export default Home