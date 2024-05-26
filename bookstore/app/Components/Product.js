import React from "react";
import styles from "../page.module.css";

function Product({ title, price, rating, image }) {
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className={styles.product__rating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <div className={styles.product__image}>
        <img src={image} alt="product" />
        <button className={styles.product__button}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
