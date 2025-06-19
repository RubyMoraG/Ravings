import React from 'react';
import './ProfileCard.css'; // We'll create this CSS file next

const ProfileSidebar = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src={user.avatar || 'https://via.placeholder.com/150'} 
          alt="Profile" 
          className="profile-avatar"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-username">@{user.username}</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
      </div>
      
      <div className="profile-bio">
        <p>{user.bio || 'No bio yet.'}</p>
      </div>
      
      <button className="profile-edit-button">Edit Profile</button>
    </div>
  );
};

export default ProfileSidebar;