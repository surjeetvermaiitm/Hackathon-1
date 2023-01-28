import React from "react";

import ProductDate from "./ProductDate";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const clearItem = (event) => {};
  return (
    <li>
      <Card className="product-item">
        <ProductDate date={props.date} />
        <div className="product-item__description">
          <h2>{props.title}</h2>
          <div className="product-item__price">{props.amount} Rs/Kg</div>
          <div>
            <button onClick={clearItem}>Remove</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
