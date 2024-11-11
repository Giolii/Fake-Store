import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Layout from "./pages/Layout";
import OrderPlaced from "./pages/OrderPlaced";
import { useState } from "react";

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
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/OrderPlaced" element={<OrderPlaced />} />
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
