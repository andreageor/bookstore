import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart";
import CartItem from "../cart-item";
import style from './style.module.scss';
import Button from "../button";
import {useState} from "react";

const Cart = () => {
  const [checkoutClicked, setCheckoutClicked] = useState<boolean>(false);
  const cart = useSelector(selectCartItems);
  const cartItems = cart.items;
  const cartTotalPrice = cart.totalPrice;

  const onCheckoutClick = () => {
    setCheckoutClicked(true);
  }

  if (checkoutClicked) {
    return (
      <div className={style.cartContainer}>
        <p>Success!</p>
      </div>
    )
  }

  return (
    <div className={style.cartContainer}>
      {cartItems.lenght ? cartItems?.map(item => <CartItem item={item}/>) : <p>No items added to the cart</p>}
      <p>{`Total amount: $${cartTotalPrice}`}</p>
      <Button text='Proceed to Checkout' onClick={onCheckoutClick}/>
    </div>
  )
}

export default Cart;