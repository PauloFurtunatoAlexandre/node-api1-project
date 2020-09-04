import React from "react";

import UserCard from "../UserCard/UserCard";

const UserList = ({ users, setUsers }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} users={users} setUsers={setUsers} />
      ))}
    </div>
  );
};

export default UserList;
