import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes guardar el usuario en localStorage, backend, etc.
    // Por ahora solo redirige al login
    alert("User registered! Now you can log in.");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "4rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Choose a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Choose a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}