import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      //  const res = await axios('https://fakestoreapi.com/products/categories');   
      const res = await axios(`${BASE_URL}/products?offset=0&limit=5`);
    
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    } 
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filtered: [],
    related: [],
    isLoading: false,
  },
  
  
  reducers: {
    filterByPrice: (state) => {
      state.filtered = state.list.filter(({price}) => price < 800);
    },
   
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload; 
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {filterByPrice, getRelatedProducts} =  productsSlice.actions
export default productsSlice.reducer;