"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
// import { bookData } from "../Data/bookData";

function Product({ title, price, rating, image }) {
  const [basket, setBasket] = useState(0);

  const handleClick = () => {
    // alert("Added to Basket");
    setBasket(basket + 1);
    console.log(basket);
  };
  return (
    <div className={styles.product}>
      <div className={styles.product__info}>
        {/* {bookData.map((book, id) => {
          return (
            <div key={id}>
              <div>{book.title}</div>
              <div>{book.image}</div>
              <div>{book.description}</div>
              <div>{book.catogory}</div>
              <div>{book.price}</div>
              <div>{book.rate}</div>
            </div>
          );
        })} */}
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

        <button className={styles.product__button} onClick={handleClick}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
