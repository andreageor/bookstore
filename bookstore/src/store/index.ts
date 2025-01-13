import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cart/index.ts';
import booksReducer from './books/index.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;