import React, { useState } from "react";

import Card from "../UI/Card";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import ProductsChart from "./ProductsChart";
import "./Products.css";

const Products = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredProducts = props.items.filter((Product) => {
    return Product.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="products">
        <ProductsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ProductsChart Products={filteredProducts} />
        <ProductsList items={filteredProducts} />
      </Card>
    </div>
  );
};

export default Products;
