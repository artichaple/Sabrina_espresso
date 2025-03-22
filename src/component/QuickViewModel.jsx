import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearQuickView } from "../Slice/quickviewSlice";

const QuickViewModel = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.quickview.product);


  
  if (!product) {
    return null;
  }







  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          className="close-btn"
          onClick={() => dispatch(clearQuickView())}
        >
          X
        </button>

        <div className="modal-content">
   
          <div className="product_image">
            <img src={product.thumbnail} alt={product.title} />
          </div>

          
          <div className="product_details">
            <h3 className="product_title">{product.title}</h3>

            <div className="product_price">₹ {product.price}</div>

            <div className="product_desc">{product.description}</div>

            <table className="product_table">
              <tbody>
                <tr>
                  <td className="label">Availability Status:</td>
                  <td className="value">{product.availabilityStatus}</td>
                </tr>
                <tr>
                  <td className="label">Discount Percentage:</td>
                  <td className="value">{product.discountPercentage}</td>
                </tr>
                <tr>
                  <td className="label">Tags:</td>
                  <td className="value">{product.tags}</td>
                </tr>
                <tr>
                  <td className="label">Return Policy:</td>
                  <td className="value">{product.returnPolicy}</td>
                </tr>




              </tbody>
            </table>
            <div className=" popup-btns p-4 ">
            <span><button ><i className='bx bx-heart  heart_btn  '></i></button></span>  
              
             <span><button ><i className='bx bx-cart-alt cart_btn'  >ADD TO CART</i></button></span>  
            
            </div>
           


           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
