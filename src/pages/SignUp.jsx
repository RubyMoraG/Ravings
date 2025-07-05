import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUser} from "../api/user";
import styles from "./SignUp.module.css";
import Rsymbol from "../assets/Rsymbol.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try{
    await createUser({ username, email, password });
    alert("User registered successfully!");
    navigate("/");
    } catch (error) {
    alert("Error registering user. Please try again.");
    console.error(error);
  }
};
  
  return (
    <div className={styles.signupWrapper}>
    <div className={styles.signupCard}>
       <div className={styles.logoContainer}>
          <img
            src={Rsymbol}
            alt="Logo"
            className={styles.logo} />
        </div>
    <form onSubmit={handleSubmit} className={styles.signupForm}>
      <h2>Sign Up</h2>
      <input
        className={styles.signupEntry}
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    
      <input 
        className={styles.signupEntry}
        type="email"
        placeholder="name@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className={styles.signupEntry}
        type="password"
        placeholder="Choose a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
      className={styles.signupEntry}
      type="password"
      placeholder="Confirm password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required 
      />
      <button className={styles.signupButton} type="submit">Register</button>
    </form>
    </div>
    </div>
  );
}