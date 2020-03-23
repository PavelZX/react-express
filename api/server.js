const express = require("express");
const bodyParser = require("body-parser");

const api = express();

// parse requests of content-type - application/json
api.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: true }));

// simple route
api.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
});

require("./routes/routes.js")(api);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
api.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
