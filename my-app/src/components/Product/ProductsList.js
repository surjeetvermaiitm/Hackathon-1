import React from "react";

import ProductItem from "./ProductItem";
import "./ProductsList.css";

const ProductsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="products-list__fallback">Found no products.</h2>;
  }

  return (
    <ul className="products-list">
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          amount={product.amount}
          date={product.date}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
