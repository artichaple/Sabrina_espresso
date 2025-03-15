import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct=createAsyncThunk("product/fetchProducts",async()=>{
    const res=await fetch("https://dummyjson.com/products/10");
    const data=await res.json();
    return data.products;
});

const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[],
        status:"idle",
        error:null,
    },



reducer :{},
extraReducers:(builder)=>{
builder
.addCase(fetchProduct.pending,(state)=>{
    state.status="loading";
}) 
.addCase(fetchProduct.fulfilled,(state,action)=>{
    state.status="success";
    state.product=action.payload;
})
.addCase(fetchProduct.rejected,(state,action)=>{
     state.status="failed";
     state.error=action.error.message;
    } );
    


},
})
export default productSlice.reducer;