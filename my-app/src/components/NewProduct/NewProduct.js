import React, { useState } from "react";

import ProductForm from "./ProductForm";
import "./NewProduct.css";

const NewProduct = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveProductDataHandler = (enteredProductData) => {
    const ProductData = {
      ...enteredProductData,
      id: Math.random().toString(),
    };
    props.onAddProduct(ProductData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-product">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Product</button>
      )}
      {isEditing && (
        <ProductForm
          onSaveProductData={saveProductDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewProduct;
