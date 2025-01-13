import BookPlaceholder from '../../assets/images/book_image.png';
import style from './style.module.scss';
import {Book} from "../books-container";

type ItemProps = {
  item: Book;
}

const BookCard = ({item}: ItemProps) => {
  const handleOnAddToCartClick = () => {

  }

  return (
    <div className={style.cardContainer}>
      <img className={style.cardImage} src={BookPlaceholder}/>
      <p className={style.cardTitle}>{item.title}</p>
      <p className={style.cardAuthor}>{item.author}</p>
      <button className={style.addToCartBtn} onClick={handleOnAddToCartClick}>Add to Cart</button>
    </div>
  )
}

export default BookCard;