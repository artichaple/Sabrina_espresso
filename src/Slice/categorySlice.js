import { createSlice } from "@reduxjs/toolkit";

 const categorySlice =createSlice({
    name: "category",
    initialState:{
        selectedCategory:"new_arrivals",
    },
    reducers:{
        setCategory:(state,action)=>{
            state.selectedCategory=action.payload;
            
        },

    },
 });
 export const{setCategory}=categorySlice.actions;
 export default categorySlice.reducer;