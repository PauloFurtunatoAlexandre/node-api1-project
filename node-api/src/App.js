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
  const [editUser, setEditUser] = useState();
  console.log(users);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => {
      setUsers(res.data);
      console.log("users: ", users);
    });
    // console.log(res.data);
    // .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
