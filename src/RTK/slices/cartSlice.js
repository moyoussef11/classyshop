import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
    increment: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.quantity += 1;
    },
    deincrement: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, clear, increment,deincrement } =
  cartSlice.actions;
export default cartSlice.reducer;
