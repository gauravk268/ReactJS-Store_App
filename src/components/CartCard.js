import React from "react";

const CartCard = ({ item, cartItems, setCartItems }) => {
  const handleCartItemRemove = () => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const increaseCount = () => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            count: cartItem.count + 1,
          };
        } else {
          return cartItem;
        }
      })
    );
  };

  const decreaseCount = () => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            count: cartItem.count - 1,
          };
        } else {
          return cartItem;
        }
      })
    );

    if (item.count < 2) {
      handleCartItemRemove();
    }
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

        <button
          className="btn btn-success increase-item"
          onClick={increaseCount}
        >
          &#65291;
        </button>

        <button className="btn">{item.count}</button>

        <button
          className="btn btn-warning decrease-item"
          onClick={decreaseCount}
        >
          &#8722;
        </button>
      </div>
    </div>
  );
};

export default CartCard;
