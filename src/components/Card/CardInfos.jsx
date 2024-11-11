import styles from "./styles/CardInfos.module.css";

const CardInfos = ({ item }) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title.slice(0, 50) + "..."}</h3>
        <p className={styles.description}>
          {item.description.slice(0, 75) + "..."}
        </p>
        <div className={styles.ratingPriceContainer}>
          <p>$ {Number(item.price).toFixed(2)}</p>
          <div className={styles.ratingContainer}>
            <p>{item.rating.rate} ⭐</p>
            <p>{item.rating.count} 👥</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInfos;
