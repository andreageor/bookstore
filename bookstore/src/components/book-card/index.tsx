import BookPlaceholder from '../../assets/images/book_image.png';
import style from './style.module.scss';
import {Book} from "../books-container";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cart";
import Button from "../button";

type ItemProps = {
  item: Book;
}

const BookCard = ({item}: ItemProps) => {
  const dispatch = useDispatch();
  const handleOnAddToCartClick = () => {
    dispatch(addToCart(item));
  }

  return (
    <div className={style.cardContainer}>
      <img className={style.cardImage} src={BookPlaceholder}/>
      <p className={style.cardTitle}>{item.title}</p>
      <p className={style.cardAuthor}>{item.author}</p>
      <p className={style.cardPrice}>{`$${item.price}`}</p>
      <Button text='Add to Cart' onClick={handleOnAddToCartClick}/>
    </div>
  )
}

export default BookCard;