import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

// export const getCategories = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       //  const res = await axios('https://fakestoreapi.com/products/categories');   
//       const res = await axios(`${BASE_URL}/categories?offset=0&limit=5`);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   } 
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    isLoading: false
  },
  reducers: { 
  //   addItemToCart: (state, {payload}, id)=>{
  //       let newCart = [...state.cart]
  //       const found = state.cart.find(({ id })  => id === payload.id)
  //       if( found ){
  //          newCart = newCart.map((item)=>{
  //             return item.id === payload.id
  //             ?{ ...item, quantity: payload.quantity || item.quantity + 1}
  //             : item ;  
  //          })
  //       } else newCart.push({ ...payload, quantity: 1})
  //       state.cart = newCart
  //   }
  // }
  addItemToCart: (state, { payload }) => {
    let newCart = [...state.cart];
    const found = state.cart.find(({ id }) => id === payload.id);

    if (found) {
      newCart = newCart.map((item) => {
        return item.id === payload.id
          ? { ...item, quantity: payload.quantity || item.quantity + 1 }
          : item;
      });
    } else newCart.push({ ...payload, quantity: 1 });

    state.cart = newCart;
  }}
//   extraReducers: (builder) => {
    // builder.addCase(getCategories.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getCategories.fulfilled, (state, { payload }) => {
    //   state.list = payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(getCategories.rejected, (state) => {
    //   state.isLoading = false;
    // });
//   },
});

export const { addItemToCart } = userSlice.actions 
export default userSlice.reducer;
