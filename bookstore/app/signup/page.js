"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";
import HomeIcon from "@mui/icons-material/Home";

import axios from "axios";

function page() {
  const [first__name, setFirst__name] = useState("");
  const [last__name, setLast__name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const data = {
    first__name,
    last__name,
    email,
    password,
  };

  const registerUser = () => {
    axios
      .post("http://localhost:8080/api/users", data)
      .then((res) => {
        console.log(res.data);
        router.push("/shop");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchUsers = () => {
    axios.get("http://localhost:8080/api/users").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [message]);

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
          <form>
            <h1>SignUp</h1>
            <div className={styles.inputContainer}>
              <div className={styles.inputBox}>
                <input
                  id={styles.inputField}
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={(e) => setFirst__name(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  type="text"
                  placeholder="Last Name"
                  required
                  onChange={(e) => setLast__name(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  type="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id={styles.inputField}
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                id={styles.inputField1}
                type="submit"
                value="Register"
                onClick={() => {
                  registerUser();
                }}
              />
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
