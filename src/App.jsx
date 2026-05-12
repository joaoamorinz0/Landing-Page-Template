import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <>
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Hero />
      <Collection addToCart={addToCart} />
      <About />
      <Contact />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={closeCart}
      />
    </>
  );
}

export default App;