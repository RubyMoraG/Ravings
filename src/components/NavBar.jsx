import React from "react";
import styles from "./NavBar.module.css";
import Rsymbol from "../assets/Rsymbol.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>        
            <img 
            src={Rsymbol} 
            alt="Logo" 
            className={styles.logo} />
        </div>
    <div className={styles.linksContainer}>
      <a href="/">Home</a>
      <a href="/feed">Feed</a>
      <a href="/profile">Profile</a>
    </div>
    </nav>
  );
}