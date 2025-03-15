import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Slice/productSlice'

  export const Store = configureStore({
  reducer: {
   products:productReducer,
  },
});


