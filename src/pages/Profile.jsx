import React, { useState } from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg';
import styles from '../Profile.module.css'; 
const user = {
  username: "Rudinia",
  name: "Ruby Mora",
  bio: "This is the begining of a bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: ProfilePicture
};
const Profile = () => {
    const [bio, setBio] = useState(user.bio);
    const [editMode, setEditMode] = useState(false);
    const [tempBio, setTempBio] = useState(user.bio);

    const handleSave = () => {
        setBio(tempBio);
        setEditMode(false);
    };
  return (

    <div className={styles.profileFrame}>
      <img
        src={user.profilePic}
        alt={user.username}
        className={styles.profilePicture}
    
      />
      <h2 className={styles.profileName}>{user.name}</h2>
      <h4 className={styles.profileUsername}>@{user.username}</h4>
      {editMode ? (
        <>
        <textarea
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            rows={3}
            style={{ width: "100%", marginBottom: "1rem" }}
            />
            <br />
            <button onClick={handleSave} className={styles.profileEditBtn}>Save</button>
            <button onClick={() => setEditMode(false)} className={styles.profileEditBtn}>Cancel</button>
            
        </>
        ) : (
            <>
            <p className={styles.profileBio}>{bio}</p>
            <button onClick={() => setEditMode(true)} className={styles.profileEditBtn}>Edit Bio</button>
  </>
        )}
      
    </div>
  );
};

export default Profile
