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

  useEffect(() => {}, [items]);

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
          <Route path="*" component={() => <Error404 />} />
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
