import React from "react";
import styles from "../page.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";

function Homepage() {
  return (
    <>
      <div className={styles.homePage_container}>
        <div className={styles.sub_container_left}>
          <div className={styles.navigations}>
            <div className={styles.logo}>
              <h1 className={styles.logo}>BookHaven 📖</h1>
            </div>
            <div className={styles.menuIcon}>
              <MenuIcon />
            </div>
            <div className={styles.nav}>
              <nav>
                <ul>
                  <li>
                    <a href="login">
                      <ShoppingCartIcon className={styles.icons} />
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="about">
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
                </ul>
              </nav>
            </div>
          </div>

          <div className={styles.textArea}>
            <p>Explore Your Favorite Books 📚</p>
            <h2 className={styles.title}>
              Get Your New <br /> <span id={styles.Bee}>B</span>ook With The{" "}
              <br /> Best Price
            </h2>
            <div className={styles.books}>
              <img id={styles.book1} src="/images/book1.jpeg" />
              <img id={styles.book} src="/images/book2.jpeg" />
              <img id={styles.book} src="/images/book3.jpeg" />
              <img id={styles.book} src="/images/book4.jpeg" />
            </div>
          </div>
        </div>
        <div className={styles.sub_container_right}></div>
      </div>
    </>
  );
}

export default Homepage;
