"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "../login/login.module.css";
import HomeIcon from "@mui/icons-material/Home";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", data)
      .then((res) => {
        console.log(res.data);
        router.push("/shop");
        // if (res.data.password === password) {
        // } else {
        //   console.log("wrong password");
        //   usenavigate("/about");
        //   alert("wrong password");
        // }
      })
      .catch((err) => {
        console.log(err.message);
      });
    setEmail("");
    setPassword("");
  };

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
                    <HomeIcon className={styles.icons} />
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.loginSubContainer}>
          <form onSubmit={handleSubmit}>
            <h1>LogIn</h1>
            <div className={styles.inputContainer}>
              <div className={styles.inputBox}>
                {/* <input
                  id={styles.inputField}
                  type="text"
                  placeholder="Username"
                  autoComplete="off"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /> */}
                <input
                  id={styles.inputField}
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p id={styles.para}>
                <a href="signup">forgot password</a>
              </p>
              <input id={styles.inputField1} type="submit" value="LogIn" />
              <p id={styles.para1}>
                Don&apos;t have an account? <a href="signup">SignUp</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
