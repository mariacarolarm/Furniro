import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id: action.payload.id, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { 
  addItem, 
  removeItem, 
  incrementQuantity,
  decrementQuantity, 
  clearCart } = cartSlice.actions;
export default cartSlice.reducer;
