import React from "react";
import styles from "../page.module.css";
function Homepage() {
  return (
    <>
      <div className={styles.homePage_container}>
        <div className={styles.sub_container_left}>
          <div className={styles.navigations}>
            <div className={styles.logo}>
              <h1 className={styles.logo}>BookHaven 📖</h1>
            </div>
            <div className={styles.nav}>
              <nav>
                <ul>
                  <li>
                    <a href="Shop">Shop</a>
                  </li>
                  <li>
                    <a href="About">About</a>
                  </li>
                  <li>
                    <a href="Contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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
        <div className={styles.sub_container_right}>
          <div className={styles.log_Ins}>
            <button className={styles.btn} id={styles.btn1} type="button">
              <a href="Login">logIn</a>
            </button>
            <button className={styles.btn} type="button">
              <a href="SignUp">Create Account</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
