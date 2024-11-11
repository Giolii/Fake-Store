import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Author: Tixio Laio</p>
      <p>© 2024 FAKEMARKET USA, Inc. All rights reserved.</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </footer>
  );
};

export default Footer;
