import React, { useState } from "react";
import Rsymbol from "../assets/Rsymbol.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
      const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3001";
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

    // Aquí insertaría una API para verificar las credenciales
    if (!response.ok) throw new Error("Login failed");
    const data = await response.json();
      console.log("Login successful", data);
      onLogin(data.user.username);

    
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed. Please try again.");
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
                  <br />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                  <br />
              
        <button className={styles.loginButton} type="submit">Log In</button>
        <Link to="/Signup" className={styles.loginButton}>Sign Up</Link>
        
        
      </form>
      <br />
     
      </div>
    </>
  );
}