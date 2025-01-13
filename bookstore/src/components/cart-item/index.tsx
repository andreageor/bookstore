import style from "./style.module.scss";
import BookPlaceholder from "../../assets/images/book_image.png";

const CartItem = ({item}) => {
  console.log(item, 'item')
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
    </div>
  )
};

export default CartItem;