import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./slices/categorySlice";

 export const store = configureStore({
    reducer: {
       categories: categoriesSlice
    },
  })
  
  export default store