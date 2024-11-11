import { Link } from "lucide-react";
import styles from "./styles/Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const totalQuantity = Object.values(cart).reduce(
    (count, { quantity }) => count + quantity,
    0
  );
  const totalPrice = Number(
    Object.values(cart).reduce(
      (acc, { item, quantity }) => acc + item.price * quantity,
      0
    )
  ).toFixed(2);

  const taxes = Number(totalPrice * 0.095).toFixed(2);

  const confirmOrder = () => {
    setCart({});
    navigate("/orderPlaced");
  };

  return totalQuantity > 0 ? (
    <div className={styles.cartContainer}>
      {Object.entries(cart).map(([id, { item, quantity }]) => (
        <div key={id} className={styles.cartCard}>
          <img src={item.image} alt={item.title} />
          <div className={styles.cardInfos}>
            <p>
              {item.title.length > 40
                ? item.title.slice(0, 40) + "..."
                : item.title}
            </p>
            <p>${Number(item.price).toFixed(2)}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      ))}
      <div className={styles.checkoutContainer}>
        <div className={styles.cartTotal}>
          <p>Quantity</p>
          <p>{totalQuantity}</p>
          <p>Items </p>
          <p> ${totalPrice}</p>
          <p>Taxes </p>
          <p> ${taxes}</p>
          <p className={styles.fullPrice}>Total</p>
          <p className={styles.fullPrice}>${+totalPrice + +taxes}</p>
        </div>
        <button
          className={styles.checkoutButton}
          onClick={() => confirmOrder()}
        >
          Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.emptyCartContainer}>
      <img src="pics/sadDog.jpg" alt="A sad Dog" />
      <h1 className={styles.emptyCartText}>Your Cart is empty</h1>
    </div>
  );
};

export default Cart;
