"use client";
import React from "react";
import styles from "./about.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function page() {
  const menu = document.getElementById("menu");
  console.log(menu);
  const close = document.getElementById("close");
  console.log(close);
  function openMenu() {
    // if (menu.classList.contains("page_menu__oE2yl")) {
    //   menu.style.display = "none";
    //   close.style.display = "block";
    // }
    console.log(menu);

    const nav = document.getElementById("nav");
    nav.style.display = "block";
  }

  const closeMenu = () => {
    // if (close.classList.contains("page_close__dAI8o")) {
    //   close.style.display = "none";
    //   menu.style.display = "block";
    // }
    // console.log(close.classList.contains("page_close__dAI8o"));
    console.log(close);
    const nav = document.getElementById("nav");
    nav.style.display = "none";
  };
  return (
    <>
      <div className={styles.aboutPage}>
        <div className={styles.sub_container_left}>
          <div className={styles.navigations}>
            <div className={styles.logo}>
              <h1 className={styles.logo}>BookHaven 📖</h1>
            </div>
            <div id="menu" className={styles.menu}>
              <MenuIcon className={styles.menuIcon} onClick={openMenu} />
            </div>
            <div id="close" className={styles.close}>
              <CloseIcon className={styles.closeIcon} onClick={closeMenu} />
            </div>
            {/* <div  className={styles.menuIcon}>
              <MenuIcon onClick={openMenu} />
              <MenuIcon onClick={closeMenu} />
            </div> */}
            <div id="nav" className={styles.nav}>
              <nav>
                <ul>
                  <li>
                    <a href="/">
                      <HomeIcon className={styles.icons} />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="login">
                      <ShoppingCartIcon className={styles.icons} />
                      Shop
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a href="contact">
                      <ContactsIcon className={styles.icons} />
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <h1 id={styles.header}>Welcome to BookHaven Store 📚</h1>
          <div className={styles.textArea}>
            <div className={styles.text}>
              <h3>About Us</h3>
              <p>
                Welcome to BookHaven, your ultimate destination for all things
                literary! At BookHaven, we believe in the power of storytelling
                and the magic that books bring into our lives. Our online
                bookstore is a haven for book lovers, offering a curated
                collection of titles spanning genres from classic literature to
                contemporary bestsellers, from gripping thrillers to
                heartwarming romance. Founded by passionate bibliophiles,
                BookHaven is more than just a place to buy books; it&apos;s a
                community where readers can explore, discover, and connect with
                their favorite authors and stories. Whether you&apos;re
                searching for a beloved classic, hunting for the latest release,
                or seeking hidden literary gems, we&apos;re here to help you
                find your next great read. With a user-friendly interface and
                personalized recommendations, navigating through BookHaven is a
                breeze. Our mission is to make the joy of reading accessible to
                everyone, which is why we offer competitive prices and fast
                shipping to ensure that you can dive into your next adventure as
                soon as possible. Join us in celebrating the beauty of words and
                the boundless worlds they create. Welcome to BookHaven, where
                every page turns into an unforgettable journey.
              </p>
            </div>
            <div>
              <button type="button" className={styles.textBtn}>
                <a href="https://www.bnl.gov/">Learn More...</a>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.sub_container_right}></div>
      </div>
    </>
  );
}

export default page;
