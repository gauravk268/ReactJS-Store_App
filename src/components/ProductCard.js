import React, { useState } from "react";

const ProductCard = ({ item, setCartItems, cartItems }) => {
  const [displayItem, updateItem] = useState(item);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  const addItemToCart = () => {
    updateItem(
      (displayItem.addItemToCart = true),
      (displayItem.addToCartButtonClass = "btn btn-danger"),
      (displayItem.addToCartButtonValue = "Remove from Cart")
    );

    setCartItems([...cartItems, displayItem]);
  };

  const removeItemFromCart = () => {
    updateItem(
      (displayItem.addItemToCart = false),
      (displayItem.addToCartButtonClass = "btn btn-info"),
      (displayItem.addToCartButtonValue = "Add to Cart")
    );

    setCartItems(
      cartItems.filter((mainItem) => mainItem.id !== displayItem.id)
    );
  };

  return (
    <div className="product-card col-3 col-lg-4 col-md-6 col-sm-12">
      {/* <div>
        <button className="btn btn-primary" onClick={increment}>
          {displayItem.price}
        </button>
        <h1>{count}</h1>
      </div> */}
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
            onClick={
              displayItem.addItemToCart ? removeItemFromCart : addItemToCart
            }
          >
            {displayItem.addToCartButtonValue}
          </button>

          {/* <button onClick={view ? this.handleEdit : this.handleSave}></button> */}
          <button className="btn btn-primary" onClick={addItemToCart}>
            <a href="/cart">Order Now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
