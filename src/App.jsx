import React, { useState } from "react";
import Feed from './pages/Feed';
import styles from "./App.module.css";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './components/Login';




export default function App() {
   const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

return (
   <>
    <div className={styles.Navbar}>
      <Navbar onLogout={()=> setUser(null)}/>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    
    <Footer />
    </div>
    </>
)
  }

