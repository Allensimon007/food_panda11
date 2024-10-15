import React from "react";
import '../Components/WelcomeAside.css'
import lota from '../assets/Tea/main.jpg'
const WelcomeAside = () => {
  return (
    <aside className="welcome-aside">
      <section className="welcome-section">
        <div className="MainLeft w-100vw ">
        <h1>Welcome to Food-Panda</h1>
        <p>
        Powered by tech and operational excellence, foodpanda has been growing its quick-commerce footprint in more than 400 cities across 11 markets in Asia – Singapore, Hong Kong, Thailand, Malaysia, Pakistan, Taiwan, Philippines, Bangladesh, Laos, Cambodia, and Myanmar. 
        </p>
        <button>Explore More </button>
        </div>
        
        <div className="image"><img src={lota} alt="" /></div>
      </section>
    </aside>
  );
};

export default WelcomeAside;
