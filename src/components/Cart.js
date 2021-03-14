import React from "react";
import CartCard from "./CartCard";

const Cart = ({ cartItems, setCartItems }) => {
  const ifCartEmpty = () => {
    if (cartItems.length === 0) {
      return (
        <div className="no-product-in-cart">
          <h1 className="icon">&#33;</h1>
          <h1>Nothing Here.</h1>
          <button className="btn btn-primary">
            <a href="/">Add Products</a>
          </button>
        </div>
      );
    }
  };
  return (
    <div className="cart-page container">
      <h1>Cart Page</h1>
      <div className="cart-items jumbotron">
        {cartItems.map((item) => {
          if (item.id >= 0) {
            return (
              <CartCard
                key={item.id}
                item={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            );
          }
          return null;
        })}

        {ifCartEmpty()}
      </div>
    </div>
  );
};

export default Cart;
