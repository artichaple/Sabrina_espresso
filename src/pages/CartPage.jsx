import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFromStorage, removeItemFromStorage } from "../Slice/cartSlice";
// import { removeFromCart } from "../Slice/cartSlice"; // Import the remove action

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFromStorage())
  }, [])
  

  console.log("cart item " + items);
  
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <div className="cart_item" key={item.id}>
            <div className="cart_image">
              <img src={item.thumbnail
} alt={item.title} />
            </div>
            <div className="cart-details">
              <p>{item.title}</p>
              <p>${item.price}</p>
              <p>{item.brand}</p>
              <p>{item.category}</p>
              <p>{item.availabilityStatus}</p>
              <button onClick={() => dispatch(removeItemFromStorage(item.id))}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
