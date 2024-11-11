import { Link } from "lucide-react";
import styles from "./styles/OrderPlaced.module.css";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.orderPlacedContainer}>
      <img src="./pics/dogShopping.png" alt="A dog with a shopping cart" />
      <p>Thank you!</p>
      <p>✅ Your order has been placed</p>

      <button className={styles.backButton} onClick={() => navigate("/store")}>
        Go back to store
      </button>
    </div>
  );
};
export default OrderPlaced;
