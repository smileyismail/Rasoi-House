import { createSlice } from "@reduxjs/toolkit";

const initialCartSliceState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartSliceState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          type: newItem.type,
          trending: newItem.trending,
          price: newItem.price,
          description: newItem.description,
          quantity: 1,
          itemId: newItem.id,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice;
