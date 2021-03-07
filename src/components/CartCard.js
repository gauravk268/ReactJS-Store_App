import React from "react";
import "./style/cartCard.css";

const CartCard = ({ item, cartItems, setCartItems }) => {
  const handleCartItemRemove = () => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };
  return (
    <div className="cart-card">
      <div className="cart-card-img">
        <img src={item.image} alt="..."></img>
      </div>
      <div className="cart-card-detail">
        <h5>{item.title}</h5>
        <h5>
          <strong>{item.price} $</strong>
        </h5>
        <button className="btn btn-danger" onClick={handleCartItemRemove}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartCard;
