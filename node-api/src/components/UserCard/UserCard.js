import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserCard;
