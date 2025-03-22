import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async Thunk to Load Cart from Local Storage
export const loadCartFromStorage = createAsyncThunk("cart/loadCart", async () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : []; // Return parsed cart data
  } catch (error) {
    console.error("Error loading cart from storage:", error);
    return []; // Return an empty array if parsing fails
  }
});
export const removeItemFromStorage = createAsyncThunk("cart/removeItem", async (id) => {
    try {
        // Get cart from localStorage
        const savedCart = localStorage.getItem("cart");
        const cartItems = savedCart ? JSON.parse(savedCart) : [];

        // Filter out the item with the given id
        const updatedCart = cartItems.filter((item) => item.id !== id);

        // Save updated cart back to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return updatedCart; // Return updated cart for Redux state
    } catch (error) {
        console.error("Error removing item from cart:", error);
        throw error;
    }
});



// Save the entire cart array to Local Storage
const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart)); // Convert array to string
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], 
    status: "idle", 
    error: null,
    quantity : 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(item);

      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 }); //  Add new item to cart
      }

      saveCartToLocalStorage(state.items); // Save the entire cart array
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(loadCartFromStorage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCartFromStorage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Update Redux state with loaded cart
      })
      .addCase(loadCartFromStorage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(removeItemFromStorage.fulfilled, (state, action) => {
        state.items = action.payload; // Update Redux state after removal
      })
      .addCase(removeItemFromStorage.rejected, (state, action) => {
        state.error = action.error.message;
      });
      
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
