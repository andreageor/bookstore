import style from './style.module.scss';
import BooksContainer from "../../components/books-container";
import {booksMockData} from "./books-mock-data.ts";
import Search from "../../components/search";

const BooksPage = () => {
  return (
    <div className={style.root}>
      <Search/>
      <BooksContainer items={booksMockData}/>
    </div>
  )
};

export default BooksPage;