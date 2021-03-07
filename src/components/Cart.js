import React from "react";
import CartCard from "./CartCard";
import "./style/cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cart-items jumbotron">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            item={item}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
