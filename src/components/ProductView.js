import React from "react";
import ProductCard from "./ProductCard";
// import products from "./data/products";

const ProductView = ({ setCartItems, items, cartItems }) => {
  return (
    <div className="product-view row jumbotron">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductView;
