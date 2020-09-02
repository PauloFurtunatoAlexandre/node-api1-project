const express = require("express");
const shortid = require("shortid");
const server = express();
const port = 5000;

let users = [
  {
    id: "dkkjsu47",
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  }
];

server.get(`/api/users`, (req, res) => {
  res.status(200).json(users);
});



server.listen(port, () =>
  console.log(`Listening server on port ${port}, happy coding!`)
);
