import { useState } from "react";
import styles from "./styles/AddToCart.module.css";

const AddToCart = ({ item, setCart }) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const addOne = () => {
    if (itemQuantity === 9) return;
    setItemQuantity((prev) => prev + 1);
  };

  const minusOne = () => {
    if (itemQuantity === 1) return;
    setItemQuantity((prev) => prev - 1);
  };

  const addItemToCart = () => {
    setCart((prev) => {
      if (prev[item.id]) {
        return {
          ...prev,
          [item.id]: {
            item: item,
            quantity: prev[item.id].quantity + itemQuantity,
          },
        };
      }
      return {
        ...prev,
        [item.id]: { item: item, quantity: itemQuantity },
      };
    });
  };

  return (
    <div className={styles.addToCartContainer}>
      <button className={styles.button} onClick={() => addItemToCart()}>
        Add to cart
      </button>
      <div className={styles.addMinusButton}>
        <button className={styles.buttonAdd} onClick={() => minusOne()}>
          -
        </button>
        <input type="number" min="1" max="9" readOnly value={itemQuantity} />
        <button className={styles.buttonAdd} onClick={() => addOne()}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
