import style from './style.module.scss';
import BooksContainer from "../../components/books-container";
import {booksMockData} from "./books-mock-data.ts";
import Search from "../../components/search";
import Cart from "../../components/cart";

const BooksPage = () => {
  return (
    <div className={style.root}>
      <div className={style.booksContainer}>
        <Search/>
        <BooksContainer items={booksMockData}/>
      </div>
      <Cart/>
    </div>
  )
};

export default BooksPage;