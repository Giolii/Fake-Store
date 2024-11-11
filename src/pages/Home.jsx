import styles from "./styles/Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to FAKEMARKET</h1>
          <p>Discover amazing deals on thousands of products</p>
          <button className={styles.heroButton}>
            <Link to="/store">SHOP NOW</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
