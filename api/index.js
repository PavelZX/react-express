const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/config.json").development;
const User = require("./models").User;

app.use(cors());
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(1);
    const response = { message: `This response came from the node.js app. User ${user.username} is on the database.` };
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
});
