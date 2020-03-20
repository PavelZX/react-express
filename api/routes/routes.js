module.exports = api => {
  const objects = require("../controllers/object.controller.js");
  const users = require("../controllers/user.controller.js");

  // Create a new object
  api.post("/object/add", objects.create);

  // Retrieve all objects
  api.get("/", objects.findAll);

  // Retrieve a single object with objectId
  api.get("/object/:id", objects.findOne);

  // Update a object with objectId
  api.put("/object/update/:id", objects.update);

  // Delete a object with objectId
  api.delete("/object/delete/:id", objects.delete);

  // Create a new user
  api.post("/object/add", users.create);

  // Retrieve all users
  api.get("/users/", users.findAll);

  // Retrieve a single user with userId
  api.get("/users/:id", users.findOne);

  // Update a user with userId
  api.put("/users/update/:id", users.update);

  // Delete a user with userId
  api.delete("/users/delete/:id", users.delete);

  // Delete a user with userId
  api.session("/session", users.session);

  // Delete a user with userId
  api.login("/login", users.login);

};
