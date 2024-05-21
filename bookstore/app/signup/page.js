import React from "react";
import styles from "../login/login.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";

function page() {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.navigations}>
          <div className={styles.logo}>
            <h1 className={styles.logo}>BookHaven 📖</h1>
          </div>
          <div className={styles.nav}>
            <nav>
              <ul>
                <li>
                  <a href="/">
                    {" "}
                    <HomeIcon className={styles.icons} />
                    Home
                  </a>
                </li>
                <li>
                  <a href="shop">
                    <ShoppingCartIcon className={styles.icons} />
                    Shop
                  </a>
                </li>
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
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.loginSubContainer}>
          <form>
            <h1>SignUp</h1>
            <div className={styles.inputContainer}>
              <div className={styles.inputBox}>
                <input
                  id={styles.inputField}
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  id={styles.inputField}
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <input
                  id={styles.inputField}
                  type="email"
                  placeholder="Email"
                  required
                />
                <input
                  id={styles.inputField}
                  type="password"
                  placeholder="Password"
                  required
                />
                <input
                  id={styles.inputField}
                  type="password"
                  placeholder="Comfirm Password"
                  required
                />
              </div>

              <input id={styles.inputField1} type="submit" value="Sign Up" />
              <p id={styles.para1}>
                I have an account? <a href="login">LogIn</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
