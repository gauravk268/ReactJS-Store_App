import React from "react";
import ProductCard from "./ProductCard";
import products from "./data/products";
import "./style/productView.css";

const ProductView = ({ setItems, setCartItems, items, cartItems }) => {
  const getProducts = () => {
    setItems(products);
  };
  getProducts();

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
