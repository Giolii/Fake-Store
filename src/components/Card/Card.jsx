import styles from "./styles/Card.module.css";
import AddToCart from "./AddToCart";
import CardInfos from "./CardInfos";

const Card = ({ item, setCart }) => {
  return (
    <div className={styles.card}>
      <CardInfos item={item} />
      <AddToCart item={item} setCart={setCart} />
    </div>
  );
};

export default Card;
