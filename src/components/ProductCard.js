import React, { useState, useEffect } from "react";
import "./style/productCard.css";

const ProductCard = ({ item, setCartItems, cartItems }) => {
  const [displayItem, updateItem] = useState(item);

  const addItemToCart = () => {
    updateItem({
      ...displayItem,
      addedToCart: true,
      addToCartButtonClass: "btn btn-danger",
      addToCartButtonValue: "Remove from Cart",
    });

    setCartItems([...cartItems, displayItem]);
  };

  const removeItemFromCart = () => {
    updateItem({
      ...displayItem,
      addedToCart: false,
      addToCartButtonClass: "btn btn-info",
      addToCartButtonValue: "Add to Cart",
    });

    setCartItems(cartItems.filter((item) => item.id !== displayItem.id));
  };

  return (
    <div className="product-card col-3 col-lg-4 col-md-6 col-sm-12">
      <div className="card">
        <img src={displayItem.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{displayItem.title}</h5>
          {/* <p className="card-text">{description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>{displayItem.price} $</strong>
          </li>
          <li className="list-group-item">Rating</li>
          <li className="list-group-item">Quantity</li>
        </ul>
        <div className="card-body">
          <button
            className={displayItem.addToCartButtonClass}
            onClick={addItemToCart}
          >
            {displayItem.addToCartButtonValue}
          </button>
          <button className="btn btn-primary" onClick={removeItemFromCart}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
