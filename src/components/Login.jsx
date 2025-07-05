import React, { useState } from "react";
import Rsymbol from "../assets/Rsymbol.png";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";



export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault(); setError("");

     try {
      const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3001";
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

    if (!response.ok) {
  
      const data = await response.json();

    if (data.message && data.message.toLowerCase().includes("invalid credentials")) {
      setError("Username or password incorrect.");
    } else {
      setError(data.message || "Login failed");
    }
    return;
      }
    
    const data = await response.json();
    setError("");
      console.log("Login successful", data);
      onLogin(data.user.username);  
    

  } catch (error) {
    console.error("Login failed:", error);
    setError("Login failed. Please try again.");
  }
  };


  return (
     <>
     <div className={styles.loginWrapper}>
     <div className={styles.loginCard}>
        <div className={styles.logoContainer}>
          <img
              src={Rsymbol}
              alt="Logo"
              className={styles.logo} />
        </div>
       
      <form onSubmit={handleSubmit} className={styles.loginForm}>
      
              <input
                  className={styles.loginEntry}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
          
              <input
                  className={styles.loginEntry}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
             
              
        <button className={styles.loginButton} type="submit">Log In</button>
        <Link to="/Signup" className={styles.loginButton}>Sign Up</Link>

        <br />
      
      </form>
     
        {error && <div className={styles.error}>{error}</div>}
      </div>
      </div>
    </>
  );
}