import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, loadCartFromStorage, removeItemFromStorage } from "../Slice/cartSlice";


const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [discount, setDiscount]= useState(0)



  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 15;; // Change this dynamically if needed
  const total = subtotal + deliveryFee ;



  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">YOUR CART</h2>

      <div className="flex flex-col md:flex-row gap-6">
     
        <div className="flex-1 bg-white shadow-md rounded-lg p-15">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4 mb-4">
               
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                 
                  <p className="text-lg font-bold mt-2"> {item.price}</p>

                </div>

                {/* Quantity Controls */}
                <div className="flex items-center">
                  <button className="px-3 py-1 bg-gray-200 rounded-full"onClick={() => dispatch(removeItemFromStorage(item.id))}>-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="px-3 py-1 bg-gray-200 rounded-full" onClick={()=> dispatch(addToCart(item))}>+</button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeItemFromStorage(item.id))}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                 
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
          )}
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-15">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span className="font-semibold">{subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Discount (0%)</span>
            <span className="text-red-500 font-semibold">- {}</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-4">
            <span>Delivery Fee</span>
            <span className="font-semibold"> {deliveryFee}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>{(total.toFixed(2))}</span>
          </div>

          {/* Promo Code Input */}
          <div className="mt-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-2 outline-none text-gray-700"
            />
            <button className="bg-black text-white px-4 py-2">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
