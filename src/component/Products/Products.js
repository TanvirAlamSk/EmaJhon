import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";


const Products = ({ handelProduct }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data[0]);
        setProducts(data);
      });
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handelProduct={handelProduct}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
