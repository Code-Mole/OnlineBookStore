import React from "react";
import styles from "../page.module.css";
import Items from "./Items.js";

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.product__row}>
        <Items />
        <Items />
      </div>
      <div className={styles.product__row}>
        {/* product */}
        {/* product */}
        {/* product */}
      </div>
      <div className={styles.product__row}>{/* product */}</div>
    </div>
  );
}

export default Product;
