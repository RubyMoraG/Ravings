import styles from "./NavBar.module.css";
import Rsymbol from "../assets/Rsymbol.png";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export default function Navbar({onLogout}) {
  //const navigate = useNavigate();
  //const handleLogout = () => {
    // Aquí podrías agregar lógica para limpiar el estado del usuario, si es necesario
   // onLogout();
   // navigate("/login.jsx"); // Redirige al usuario a la página de inicio o login
  //};
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