import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuickView } from '../Slice/quickviewSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card-content text-center">
        <div className="rating_price_title">
          <h3>{product.title}</h3>
          <span>${product.price}</span>
    
          <div>
            <div className="rating" style={{ "--rating": product.rating }} aria-label={`Rating: ${product.rating} out of 5`}></div>
          </div>
        </div>

        <div className="card-btns">
          <button className="add-to-cart">
          <i className='bx bx-cart-alt'></i>
       </button>
          
          <button className="quick-view" onClick={() => dispatch(setQuickView(product))}>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
