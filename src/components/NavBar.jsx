import styles from "./NavBar.module.css";
import Rsymbol from "../assets/Rsymbol.png";
import { Link } from "react-router-dom";

export default function Navbar({onLogout}) {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>   
          
          <Link to="/" className={styles.link}><img 
            src={Rsymbol} 
            alt="Logo" 
            className={styles.logo} 
            /></Link>     
         
        </div>
    <div className={styles.linksContainer}>
      <Link to="/Feed" className={styles.link}>Feed</Link>
      <Link to="/Profile" className={styles.link}>Profile</Link>
      
    </div>
    <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
    </nav>
  );
}