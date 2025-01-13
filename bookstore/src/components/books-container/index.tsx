import BookCard from '../book-card';
import style from './style.module.scss';

export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

type BooksContainerProps = {
  items: Book[];
}

const BooksContainer = ({items}: BooksContainerProps) => {
  return (
    <div className={style.cardsContainer}>
      {items.map(item => <BookCard item={item}/>)}
    </div>
  )
};

export default BooksContainer;