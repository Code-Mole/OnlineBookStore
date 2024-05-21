import React from "react";
import styles from "../page.module.css";
import Items from "./Items.js";

function Product() {
  return (
    <div className={styles.product}>
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <div className="product__rating">
        <p>⭐⭐⭐</p>
      </div>
      <div className="product__image">
        <img src="/images/book3.jpeg " alt="product" />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
