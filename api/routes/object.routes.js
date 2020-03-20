module.exports = api => {
  const objects = require("../controllers/object.controller.js");

  // Create a new object
  api.post("/add", objects.create);

  // Retrieve all objects
  api.get("/", objects.findAll);

  // Retrieve a single object with objectId
  api.get("/:id", objects.findOne);

  // Update a object with objectId
  api.put("/update/:id", objects.update);

  // Delete a object with objectId
  api.delete("/delete/:id", objects.delete);

};
