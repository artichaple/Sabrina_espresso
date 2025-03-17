import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Slice/productSlice'
import categoryReducer from "../Slice/categorySlice"
import quickviewReducer from"../Slice/quickviewSlice"
  export const Store = configureStore({
  reducer: {
   products:productReducer,
   category:categoryReducer,
   quickview: quickviewReducer

  },
});


