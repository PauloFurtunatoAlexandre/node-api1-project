import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import UserList from "./components/userList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    bio: "",
  });
  const [editing, setEditing] = useState(false);
  console.log(users);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log("users: ", users);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (newUser.id == null || newUser.id == "",
      newUser.name == null || newUser.name == "",
      newUser.bio == null || newUser.bio == "")
    ) {
      alert("Please Fill All Required Field");
      return false;
    } else {
      axios
        .post("http://localhost:5000/api/users", newUser)
        .then((res) => setNewUser(res.data));
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <UserList users={users} setUsers={setUsers} />
      <div className="new-user-form">
        <h3>Add A New User</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name of new user..."
            value={newUser.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio of this person..."
            value={newUser.bio}
            onChange={handleChange}
          />
          <button>Add New User</button>
        </form>
      </div>
    </div>
  );
}

export default App;
