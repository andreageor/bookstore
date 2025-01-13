import style from "./style.module.scss";
import BookPlaceholder from "../../assets/images/book_image.png";
import Button from "../button";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cart";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(removeFromCart(item));
  }

  return (
    <div className={style.cartItemContainer}>
      <img className={style.cardImage} src={BookPlaceholder}/>
      <div className={style.bookInfo}>
        <p className={style.title}>{item.title}</p>
        <p className={style.author}>{item.author}</p>
        <p className={style.cartItemQuantity}>{`Qty. ${item.quantity}`}</p>
      </div>
      <div className={style.priceInfo}>
        <p>{`Price: ${item.price}`}</p>
        <p>{`Total price: ${item.price}`}</p>
      </div>
      <Button text='Remove' onClick={onRemoveClick}/>
    </div>
  )
};

export default CartItem;