const express = require("express");
const shortid = require("shortid");
const server = express();
const port = 5000;

let users = [
  {
    id: "lkjasdf84",
    name: "Jane Doe", 
    bio: "Not Tarzan's Wife, another Jane",
  }
];

server.get(`/api/users`, (req, res) => {
  res.status(200).json(users);
});

server.delete(`/api/users/:id`, (req, res) => {
  const { id } = req.params;

  const userDeleted = users.find((user) => user.id === id);

  if (userDeleted) {
    users = users.filter((user) => user.id !== id);
    res.status(200).json(userDeleted);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

server.post(`/api/users`, (req, res) => {
  const user = req.body;

  user.id = shortid.generate();

  users.push(user);
  res.status(201).json(user);
});

server.get(`/api/users/:id`, (req, res) => {
  const { id } = req.params;
  const singleUser = req.body;

  let foundUser = users.find((user) => user.id === id);

  if (foundUser) {
    Object.assign(foundUser, singleUser);
    res.status(200).json(foundUser);
  } else {
    res.status(404).json({ message: "user not found!" });
  }
  res.status(201).json(res.params.id);
});

server.listen(port, () =>
  console.log(`Listening server on port ${port}, happy coding!`)
);
