import { createSlice } from "@reduxjs/toolkit";

const quickviewSlice=createSlice({
 name:"quickview" ,
 initialState:{
    product:null,
 } ,
 reducers:{
    setQuickView:(state,action)=>{
        state.product=action.payload;
    },
    clearQuickView:(state)=>{
        state.product=null;
    },
 },   





});
export const{setQuickView ,clearQuickView}=quickviewSlice.actions;
export  default quickviewSlice.reducer;