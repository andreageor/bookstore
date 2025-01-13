import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../index.ts";
import {booksMockData} from "../../pages/books-page/books-mock-data.ts";

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

type BooksState = {
  books: Book[];
  search: string;
}

const initialState: BooksState = {
  books: booksMockData,
  search: '',
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchBooks: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state, action) => {
      state.search = '';
    },
  }
});

const selectBooks = (state: RootState) => {
  const books = state.books.books;
  const search = state.books.search;
  return books.filter(book => book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search));
};

export const {setSearchBooks, clearSearch} = booksSlice.actions;

export {
  selectBooks,
}

export default booksSlice.reducer;