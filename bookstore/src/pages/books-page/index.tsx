import style from './style.module.scss';
import BooksContainer from "../../components/books-container";
import Search from "../../components/search";
import Cart from "../../components/cart";
import {useSelector} from "react-redux";
import {selectBooks} from "../../store/books";

const BooksPage = () => {
  const books = useSelector(selectBooks);

  return (
    <div className={style.root}>
      <div className={style.booksContainer}>
        <Search/>
        <BooksContainer items={books}/>
      </div>
      <Cart/>
    </div>
  )
};

export default BooksPage;