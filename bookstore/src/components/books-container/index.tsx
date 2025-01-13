import BookCard from '../book-card';
import style from './style.module.scss';
import {Book} from "../../store/books";

type BooksContainerProps = {
  items: Book[];
}

const BooksContainer = ({items}: BooksContainerProps) => {
  return (
    <div className={style.cardsContainer}>
      {items.map(item => <BookCard key={item.id} item={item}/>)}
    </div>
  )
};

export default BooksContainer;