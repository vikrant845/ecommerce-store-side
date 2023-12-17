import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Product[]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (!existingProduct) state.products.push(action.payload);
    },
    removeItem: (state, action) => {
      state.products = [ ...state.products.filter(product => product.id === action.payload.id) ];
    },
    removeAll: (state) => { state.products = [] }
  }
});

export const { addItem, removeItem, removeAll } = cartSlice.actions;
export default cartSlice.reducer;