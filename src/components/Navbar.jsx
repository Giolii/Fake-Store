import { Link, NavLink } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = ({ totalQuantity }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.logo}>FAKE MARKET</h1>
      </Link>
      <ul className={styles.links}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.activeCart : styles.navLink
            }
          >
            <div className={styles.cartContainer}>
              <ShoppingCart className={styles.cartIcon} />
              {totalQuantity > 0 && (
                <span key={totalQuantity} className={styles.cartBadge}>
                  {totalQuantity}
                </span>
              )}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
