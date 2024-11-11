import styles from "./styles/About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <h1>About FAKEMARKET</h1>
        <p>Revolutionizing online shopping since 2020</p>
      </section>

      <section className={styles.overview}>
        <h2>Who We Are</h2>
        <p>
          FAKEMARKET is a leading e-commerce platform that connects millions of
          shoppers with the best deals on everything from electronics to home
          goods. Founded in 2020, we&apos;ve grown from a small startup to a
          marketplace serving over 50 countries.
        </p>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>
            To make quality products accessible to everyone, everywhere, while
            supporting sustainable shopping practices and empowering local
            sellers.
          </p>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.stat}>
          <h3>2M+</h3>
          <p>Active Users</p>
        </div>
        <div className={styles.stat}>
          <h3>50+</h3>
          <p>Countries</p>
        </div>
        <div className={styles.stat}>
          <h3>100K+</h3>
          <p>Products</p>
        </div>
        <div className={styles.stat}>
          <h3>24/7</h3>
          <p>Support</p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valueGrid}>
          <div className={styles.value}>
            <h3>Customer First</h3>
            <p>Every decision we make starts with our customers&apos; needs.</p>
          </div>
          <div className={styles.value}>
            <h3>Quality Guaranteed</h3>
            <p>We thoroughly vet all products and sellers on our platform.</p>
          </div>
          <div className={styles.value}>
            <h3>Sustainability</h3>
            <p>
              Committed to reducing our environmental impact in all operations.
            </p>
          </div>
          <div className={styles.value}>
            <h3>Innovation</h3>
            <p>
              Constantly improving our platform with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <h2>Leadership Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="./pics/sara.webp" alt="one" />
            </div>
            <h3>Sarah Johnson</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="./pics/micheal.jpg" alt="two" />
            </div>
            <h3>Michael Chen</h3>
            <p>CTO</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="./pics/emma.webp" alt="three" />
            </div>
            <h3>Emma Rodriguez</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
