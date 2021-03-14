import "./App.css";
import { useState, useEffect } from "react";
import {
  Navbar,
  About,
  Cart,
  Contact,
  ProductView,
  Error404,
} from "./components/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import db from './components/firebase/config';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getLocalCart = () => {
      if (localStorage.getItem("cartItems") === null) {
        localStorage.setItem("cartItems", JSON.stringify([]));
      } else {
        let cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
        setCartItems(cartItemsLocal);
      }
    };

    getLocalCart();
  }, []);

  useEffect(() => {
    const saveLocalCart = () => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    saveLocalCart();
  }, [cartItems]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      setItems(
        data.map((item) => {
          return {
            ...item,
            addedToCart: false,
            addToCartButtonValue: "Add to Cart",
            addToCartButtonClass: "btn btn-info",
          };
        })
      );
      // console.log(data);
    };

    getProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
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
          <Route path="*" component={() => <Error404 />} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = ({ setCartItems, items, cartItems }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <ProductView
        setCartItems={setCartItems}
        items={items}
        cartItems={cartItems}
      />
    </div>
  );
};

export default App;
