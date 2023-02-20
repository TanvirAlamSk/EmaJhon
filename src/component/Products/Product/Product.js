import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({ product, handelProduct }) => {
  const { id, img, name, price, ratings } = product;
  return (
    <div className="product">
      <div className="product-card">
        <img src={img} className="product-img" alt="#"></img>
        <p className="name">{name}</p>
        <p className="price">Price: ${price}</p>
        <p className="rating">Rating : {ratings}</p>
      </div>
      <button className="cart-btn" onClick={() => handelProduct(price)}>
        Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
