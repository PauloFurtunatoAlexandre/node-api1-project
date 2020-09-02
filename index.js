const express = require("express");
const shortid = require("shortid");
const app = express();
const port = 5000;

app.use(express.json());

let users = [
  {
    id: "lkjasdf84",
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },
];

app.get(`/api/users`, (req, res) => {
  res.status(200).json(users);
});

app.delete(`/api/users/:id`, (req, res) => {
  const { id } = req.params;

  const userDeleted = users.find((user) => user.id === id);

  if (userDeleted) {
    users = users.filter((user) => user.id !== id);
    res.status(200).json(userDeleted);
  } else {
    res.status(404).json({ message: "id not found" });
  }
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;

  newUser.id = shortid.generate();

  users.push(newUser);
  res.status(201).json(newUser);
});

app.get(`/api/users/:id`, (req, res) => {
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

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  let userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== 1) {
    users[userIndex] = changes;
    res.status(200).json(users[userIndex]);
  } else {
    res.status(404).json({ message: "could not find the user!" });
  }
});

app.listen(port, () =>
  console.log(`Listening server on port ${port}, happy coding!`)
);
