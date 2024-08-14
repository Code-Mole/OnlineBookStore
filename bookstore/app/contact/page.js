"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./contact.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

function page() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    userName,
    email,
    phoneNumber,
    message,
  };

  // const message = ()=>{

  // }
  // console.log(data);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/contacts", data)
        .then((res) => {
          alert("Message sent successfully");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      await axios.get("http://localhost:8080/api/contacts").then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function openMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = "block";
  }

  const closeMenu = () => {
    const nav = document.getElementById("nav");
    nav.style.display = "none";
  };

  const contactVariants = {
    hidden: {
      opacity: 0,
      x: "-100vh",
    },
    nav_initial: {
      opacity: 0,
      y: "-100vh",
    },
    nav_animate: {
      opacity: 1,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <>
      <div className={styles.RootPage}>
        <section className={styles.contactPage}>
          <div>
            <motion.div
              className={styles.navigations}
              variants={contactVariants}
              initial="nav_initial"
              animate="nav_animate"
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
                    <li>
                      <a href="login">
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
                    <li></li>
                  </ul>
                </nav>
              </div>
            </motion.div>
            <motion.h1
              id={styles.header}
              variants={contactVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
            >
              Welcome to BookHaven Store 📚
            </motion.h1>
            <div className={styles.sub_container_up}>
              <div className={styles.teatContainer}>
                <motion.h1
                  initial={{ opacity: 0, x: "-100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Our Dream <br />
                  Is Global <br />
                  Learning
                  <br /> Transformation
                </motion.h1>
                <motion.div
                  className={styles.socialMedia}
                  initial={{ opacity: 0, x: "-100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100084081554134"
                    className={styles.facebook}
                  >
                    <FacebookIcon className={styles.icons} />
                  </a>
                  <a href="">
                    <TwitterIcon className={styles.icons} />
                  </a>
                  <a href="">
                    <LinkedInIcon className={styles.icons} />
                  </a>
                  <a href="">
                    <InstagramIcon className={styles.icons} />
                  </a>
                </motion.div>
                <motion.button
                  type="button"
                  className={styles.textBtn}
                  initial={{ opacity: 0, y: "-100vh" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <a href="#ContactSection">Contact Us ......</a>
                </motion.button>
              </div>
              <motion.div
                className={styles.imgContainer}
                initial={{ opacity: 0, x: "100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
          </div>
        </section>
        <hr id={styles.line} />
        <section className={styles.ContactSection}>
          <div className={styles.sub_container_down}>
            <div className={styles.formContainer}>
              <form id={styles.formflex}>
                <input
                  id={styles.inputField}
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  name="Email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  name="Phonenumber"
                  type="Number"
                  placeholder="Phonenumber 📞"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <textarea
                  id={styles.teatArea}
                  cols={5}
                  rows={4}
                  placeholder="Say Something ........"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  className={styles.textBtn}
                  type="submit"
                  onClick={sendMessage}
                >
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
