import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index.ts";

type CartItem = {
  id: number;
  name: number;
  price: number;
  totalPrice: number;
  quantity: number;
}

type Cart = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

type CartState = {
  cart: Cart,
}

const initialState: CartState = {
  cart: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice+=newItem.price;
      } else {
        state.cart.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        })
      }
      state.cart.totalQuantity++;
      state.cart.totalPrice+= newItem.price;
    },
    removeFromCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.items.find(item => item.id === newItem.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice-=newItem.price;
      } else {
        state.cart.items = state.cart.items.filter(item => item.id !== newItem.id);
      }
      state.cart.totalQuantity--;
      state.cart.totalPrice-= newItem.price;
    }
  }
});

const selectCartItems = (state: RootState) => state.cart.cart;

export const {addToCart, removeFromCart} = cartSlice.actions;

export {
  selectCartItems,
}

export default cartSlice.reducer;