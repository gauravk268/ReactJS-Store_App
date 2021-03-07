import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ProductView from "./components/ProductView";
// import products from "./components/data/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import db from './components/firebase/config';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getLocalCart();
  }, []);

  useEffect(() => {
    saveLocalCart();
  }, [cartItems]);

  const saveLocalCart = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const getLocalCart = () => {
    if (localStorage.getItem("cartItems") === null) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    } else {
      let cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(cartItemsLocal);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                setItems={setItems}
                setCartItems={setCartItems}
                items={items}
                cartItems={cartItems}
              />
            )}
          />
          <Route path="/about" component={() => <About />} />
          <Route
            path="/cart"
            component={() => (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            )}
          />
          <Route path="/contact" component={() => <Contact />} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = ({ setItems, setCartItems, items, cartItems }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductView
        setItems={setItems}
        setCartItems={setCartItems}
        items={items}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;
