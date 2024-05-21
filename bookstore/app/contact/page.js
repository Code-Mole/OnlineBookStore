import React from "react";
import styles from "./contact.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";

function page() {
  return (
    <>
      <div className={styles.RootPage}>
        <section className={styles.contactPage}>
          <div>
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
            <h1 id={styles.header}>Welcome to BookHaven Store 📚</h1>
            <div className={styles.sub_container_up}>
              <div className={styles.teatContainer}>
                <h1>
                  Our Dream <br />
                  Is Global <br />
                  Learning
                  <br /> Transformation
                </h1>
                <button type="button" className={styles.textBtn}>
                  <a href="#ContactSection">Contact Us ......</a>
                </button>
              </div>
              <div className={styles.imgContainer}></div>
            </div>
          </div>
        </section>
        <hr id={styles.line} />
        <section id="ContactSection">
          <div className={styles.sub_container_down}>
            <div className={styles.formContainer}>
              <form id={styles.formflex}>
                <input
                  id={styles.inputField}
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <input
                  id={styles.inputField}
                  name="Email"
                  type="email"
                  placeholder="Email"
                />
                <input
                  id={styles.inputField}
                  name="Phonenumber"
                  type="Number"
                  placeholder="Phonenumber 📞"
                />
                <textarea
                  id={styles.teatArea}
                  cols={35}
                  rows={15}
                  placeholder="Say Something ........"
                ></textarea>
                <button className={styles.textBtn} type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className={styles.ratingContainer}>
              <div id={styles.imgContainer}></div>
              <div className={styles.ratecontainer}>
                <div className={styles.rate}>
                  <h4> Rate : 4.5👏</h4>
                  <p>
                    As of my last update in January 2022, BookHaven was one of
                    the largest and most influential technology companies in the
                    world.
                  </p>
                </div>
                <div className={styles.rate}>
                  <h4>percentage : 95%👍</h4>
                  <p>
                    BookHaven, we have been rank third in the world with a
                    percentage of 95%
                  </p>
                </div>
                <div className={styles.rate}>
                  <h4>Customers : 1000K+👁️</h4>
                  <p>
                    BookHaven company have over 1000k+ Customers which are okay
                    with the service. Try us ...
                  </p>
                </div>
                <div className={styles.rate}>
                  <h4>Subscribers : 10000K+🤳</h4>
                  <p>BookHaven company have over 10000K+ Subscribers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default page;