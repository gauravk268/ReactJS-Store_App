import React from "react";
import ProductCard from "./ProductCard";
// import products from "./data/products";

const ProductView = ({ items, setItems, cartItems, setCartItems }) => {
  return (
    <div className="product-view row jumbotron">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          items={items}
          setItems={setItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default ProductView;
