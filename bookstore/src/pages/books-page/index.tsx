import BooksContainer from "../../components/books-container";
import {booksMockData} from "./books-mock-data.ts";

const BooksPage = () => {
  return (
    <BooksContainer items={booksMockData}/>
  )
};

export default BooksPage;