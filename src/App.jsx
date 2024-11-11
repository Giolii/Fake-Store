import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import OrderPlaced from "./pages/OrderPlaced";

// Separate the routes into their own component
export const AppRoutes = ({ cart, setCart, totalQuantity }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout totalQuantity={totalQuantity} />}>
        <Route index element={<Home />} />
        <Route
          path="/store"
          element={<Store cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
      </Route>
    </Routes>
  );
};

function App() {
  const [cart, setCart] = useState({});

  const totalQuantity = Object.values(cart).reduce(
    (count, { quantity }) => count + quantity,
    0
  );

  return (
    <Router>
      <AppRoutes cart={cart} setCart={setCart} totalQuantity={totalQuantity} />
    </Router>
  );
}

export default App;
