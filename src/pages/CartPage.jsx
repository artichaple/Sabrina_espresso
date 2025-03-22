import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFromStorage, removeItemFromStorage } from "../Slice/cartSlice";

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>

      {items.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 transition-transform hover:scale-105"
            >
              <div className="flex justify-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-green-600">{item.availabilityStatus}</p>

                <button
                  onClick={() => dispatch(removeItemFromStorage(item.id))}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
