import React, { useEffect } from "react";
import axios from "axios";

const UserCard = ({ user, users, setUsers }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then((res) => {
      axios.get("http://localhost:5000/api/users").then((res) => {
        setUsers(res.data);
      });
    });
  };

  return (
    <div className="user-card">
      <h4>{user.name}</h4>
      <p>{user.bio}</p>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserCard;
