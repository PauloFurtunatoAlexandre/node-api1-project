import React, { useState } from "react";
import axios from "axios";

const UserCard = ({ user, users, setUsers }) => {
  const [editUser, setEditUser] = useState({
    name: "",
    bio: "",
  });

  const [editing, setEditing] = useState(false);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then((res) => {
      axios.get("http://localhost:5000/api/users").then((res) => {
        setUsers(res.data);
      });
    });
  };

  const handleUpdate = (id) => {
    axios
      .get(`http://localhost:5000/api/users/${id}`)
      .then((res) => {
        setEditUser(res.data);
        setEditing(true);
      })
      .catch((err) => err.message);
  };

  const saveUser = (id) => {
    axios
      .put(`http://localhost:5000/api/users/${id}`, editUser)
      .then((res) => {
        setEditing(false);
        setEditUser(res.data);
      })
      .catch(err => err.message);
      window.location.reload();
  };

  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="user-card">
      <h4>{user.name}</h4>
      <p>{user.bio}</p>
      <button onClick={() => handleUpdate(user.id)}>Update</button>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
      {setEditing ? (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name of new user..."
            value={editUser.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio of this person..."
            value={editUser.bio}
            onChange={handleChange}
          />
          <button onClick={() => saveUser(user.id)}>Save</button>
        </div>
      ) : null}
    </div>
  );
};

export default UserCard;
