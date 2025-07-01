import React, { useState } from "react";
import Rsymbol from "../assets/Rsymbol.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí insertaría una API para verificar las credenciales
    if (username === "admin" && password === "1234") {
      onLogin(username);
    } else {
      alert("Incorrect username or password");
    }
  };


  return (
     <>
     <div className={styles.loginWrapper}>
     <div className={styles.logoContainer}>
          <img
              src={Rsymbol}
              alt="Logo"
              className={styles.logo} />
      </div>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
              <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              
        <button className={styles.loginButton} type="submit">Log In</button>
        <button className={styles.signupButton} type="submit"><Link to="/SignUp">Sign Up</Link> </button>
        
        
      </form>
      <br />
     
      </div>
    </>
  );
}