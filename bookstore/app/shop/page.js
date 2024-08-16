"use client";
import React from "react";
import styles from "./shop.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Product from "../Components/Product.js";
// import Book from "../components/Book/Book.js";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
// import { bookData } from "../Data/bookData.js";

export default function page() {
  function openMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = "block";
  }

  const closeMenu = () => {
    const nav = document.getElementById("nav");
    nav.style.display = "none";
  };
  //   console.log(bookData);

  const bookVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <>
      <div className={styles.shop__container}>
        <motion.div
          className={styles.navigations}
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.logo}>
            <h1 className={styles.logo}>BookHaven 📖</h1>
          </div>
          <div className={styles.menuIcon}>
            <MenuIcon onClick={openMenu} />
            <CloseIcon onClick={closeMenu} />
          </div>
          <div id="nav" className={styles.nav}>
            <nav>
              <ul>
                <li>
                  <a href="/">
                    {" "}
                    <HomeIcon className={styles.icons} />
                    Home
                  </a>
                </li>
                <li></li>
                <li>
                  <a href="about">
                    {" "}
                    <InfoIcon className={styles.icons} />
                    About
                  </a>
                </li>
                <li>
                  <a href="contact">
                    <ContactsIcon className={styles.icons} />
                    Contact
                  </a>
                </li>
                <li>
                  <a href="Backet">
                    <ShoppingBasketIcon className={styles.icons} />
                    <span>0</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
        <div className={styles.search}>
          <input
            type="search"
            name="search "
            id={styles.searchInput}
            placeholder="Search Books "
          />
          <button type="search" id={styles.searchbtn}>
            Search
          </button>
        </div>
        {/* <div className={styles.shopmargin}>
      <div>
        {bookData.map((book)=> <Book book={book} key={book.id} />)}
      </div>
      </div> */}
        <div className={styles.shop__image}>
          <img
            className={styles.shop__bg}
            src="/images/book.bg1.jpeg"
            alt="shop"
          />
        </div>
        <div className={styles.product__container}>
          <motion.div
            className={styles.product__row}
            variants={bookVariants}
            initial="hidden"
            animate="visible"
          >
            <Product
              title="Infinite Powers"
              price={29.99}
              image="/images/book1.jpeg"
              rating={4}
            />
            <Product
              title="Javascript for beginners"
              price={39.99}
              image="/images/book3.jpeg"
              rating={5}
            />
            <Product
              title="Systems analysis and design"
              price={33.99}
              image="/images/book4.jpeg"
              rating={5}
            />
          </motion.div>
          <motion.div
            className={styles.product__row}
            variants={bookVariants}
            initial="hidden"
            animate="visible"
          >
            <Product
              title="Machine Learning system design interview for developers "
              price={41.99}
              image="/images/book6.jpeg"
              rating={5}
            />
            <Product
              title="Story Thieves"
              price={12.99}
              image="/images/book7.jpeg"
              rating={2}
            />
          </motion.div>
          <motion.div
            className={styles.product__row}
            variants={bookVariants}
            initial="hidden"
            animate="visible"
          >
            <Product
              title="Take my hand"
              price={15.99}
              image="/images/book10.jpeg"
              rating={3}
            />
            <Product
              title="Coding basics for beginners"
              price={23.99}
              image="/images/book13.jpeg"
              rating={5}
            />
            <Product
              title="programming languages for Machine Learning"
              price={45.99}
              image="/images/book14.jpeg"
              rating={5}
            />
            <Product
              title="The complete software developer`s career guide"
              price={30.99}
              image="/images/book16.jpeg"
              rating={5}
            />
          </motion.div>
          <motion.div
            className={styles.product__row}
            variants={bookVariants}
            initial="hidden"
            animate="visible"
          >
            <Product
              title="Small business ideas for beginners"
              price={25.99}
              image="/images/book18.jpeg"
              rating={4}
            />
            <Product
              title="How to do thing in a smart way"
              price={13.99}
              image="/images/book19.jpeg"
              rating={4}
            />
          </motion.div>
          <motion.div
            className={styles.product__row}
            variants={bookVariants}
            initial="hidden"
            animate="visible"
          >
            <Product
              title="Guide to Graphic design"
              price={28.99}
              image="/images/book20.jpeg"
              rating={5}
            />
            {/* <Product /> */}
          </motion.div>
        </div>
      </div>
    </>
  );
}
