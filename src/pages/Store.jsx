import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import styles from "./styles/Store.module.css";
import LoadingSpinner from "../components/LoadinSpinner";

const Store = ({ cart, setCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No products found</div>;

  return (
    <div className={styles.storeContainer}>
      {data.map((item) => (
        <Card item={item} key={item.id} setCart={setCart} />
      ))}
    </div>
  );
};

export default Store;
