import React from "react";
import CartCard from "./CartCard";

const Cart = ({ cartItems, setCartItems }) => {
  let totalCartValue = 0;

  const calculateTotalCartValue = () => {
    cartItems.forEach((item) => {
      totalCartValue += item.price;
    });
  };

  calculateTotalCartValue();

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
    <div className="cart-page container jumbotron">
      <div className="cart-items">
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
      <div className="cart-items cart-detail">
        <button className="btn btn-info ">
          Cart Total: {totalCartValue} $
        </button>
        <button className="btn btn-primary ">Proceed to Buy</button>
      </div>
    </div>
  );
};

export default Cart;
