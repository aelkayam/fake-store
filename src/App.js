import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Loading from "./components/loading/Loading";
import MyProducts from "./contexts/MyProducts";
import Cart from "./components/cart/Cart";

let defaultProducts = [];
let CartProducts = [];
let loadedProducts = false;

function App() {
  const [productsList, setProductsList] = useState(defaultProducts);
  const [cart, setCart] = useState(CartProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsList(json);
        defaultProducts = json;
        loadedProducts = true;
      });
  }, []);

  // create category list:
  let categories = defaultProducts
    .map((product) => product.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  categories = ["all", ...categories];

  // filter products by category
  const filter = (category) => {
    if (category === "all") setProductsList(defaultProducts);
    else
      setProductsList(
        defaultProducts.filter((item) => item.category === category)
      );
  };

  // add product to shopping cart
  const addToCart = (prop) => {
    setCart([...cart, prop]);
  };

  return (
    <MyProducts.Provider value={addToCart}>
      <div className="App">
        <>
          <Cart cart={cart} />
          <Header categories={categories} filter={filter} />
          <Loading showLoading={loadedProducts} />
          <Products products={productsList} />
        </>
      </div>
    </MyProducts.Provider>
  );
}

export default App;
