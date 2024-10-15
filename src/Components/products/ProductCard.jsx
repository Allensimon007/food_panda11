import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

const ProductsCard = ({ data }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/Cart', { replace: true });
  };

  return (
    <div className='max-w-screen-1xl container mx-auto xl:px-28 px-4 mb-12'>
      <div className='cart_card grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-1 place-items-center'>
        {/* product section */}
        {
          data.map((item) => (
            <div key={item.id}>
              <div className='relative items-center text-center pb-3 pt-9 text-1xl text-pramary'>
                <img src={item.img} alt="" className='images object-cover rounded-md' />
                <div className='leading-7'>
                  <h2 className='font-semibold'>{item.title}</h2>
                  <h2 className='font-bold'>${item.Price}</h2>
                </div>
                <button className='cart' onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductsCard;
