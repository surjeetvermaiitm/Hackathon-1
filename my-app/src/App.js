import React, { useState } from "react";

import NewProduct from "./components/NewProduct/NewProduct";
import Products from "./components/Product/Products";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Potato",
    amount: 20,
    price: 20,
    date: new Date(2023, 0, 28),
  },
];
//   {
//     id: "p2",
//     product: "Cucumber",
//     amount: 25,
//     price: 25,
//     date: new Date(2023, 0, 28),
//   },
//   {
//     id: "p3",
//     product: "Paddy",
//     amount: 10,
//     price: 15,
//     date: new Date(2023, 0, 28),
//   },
//   {
//     id: "p4",
//     product: "Tomato",
//     amount: 35,
//     price: 50,
//     date: new Date(2023, 0, 28),
//   },
// ];

const App = () => {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      return [product, ...prevProducts];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewProduct onAddProduct={addProductHandler} />
      <Products items={products} />
    </div>
  );
};

export default App;
