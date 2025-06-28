import React, { useState } from "react";
import Rsymbol from "../assets/Rsymbol.png";
import styles from "./Login.module.css"; // Asegúrate de crear este archivo CSS

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer una llamada a una API para verificar las credenciales
    if (username === "admin" && password === "1234") {
      onLogin(username);
    } else {
      alert("Usuario o contraseña incorrectos");
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
      <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "4rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
              <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              <button type="submit">Iniciar sesión</button>
          </form>
          </div>
          </>
  );
}