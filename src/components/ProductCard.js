import React, { useState, useEffect } from "react";
import "./style/productCard.css";

const ProductCard = ({ item, setCartItems, cartItems }) => {
  const addItemToCart = () => {
    item.addedToCart = true;
    item.addToCartButtonClass = "btn btn-danger";
    item.addToCartButtonValue = "Remove from Cart";
  };

  const removeItemFromCart = () => {
    item.addedToCart = false;
    item.addToCartButtonClass = "btn btn-info";
    item.addToCartButtonValue = "Add to Cart";
  };

  // useEffect(() => {
  //   addItemToCart();
  // }, [item]);

  // useEffect(() => {
  //   removeItemFromCart();
  // }, [item]);

  return (
    <div className="product-card col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          {/* <p className="card-text">{description}</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>{item.price} $</strong>
          </li>
          <li className="list-group-item">Rating</li>
          <li className="list-group-item">Quantity</li>
        </ul>
        <div className="card-body">
          <button className={item.addToCartButtonClass} onClick={addItemToCart}>
            {item.addToCartButtonValue}
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
