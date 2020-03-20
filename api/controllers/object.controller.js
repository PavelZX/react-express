const Object = require("../models/object.model.js");

// Create and Save a new Object
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Object
  const object = new Object({
    data: req.body.data,
    name: req.body.name
  });

  // Save Object in the database
  Object.create(object, (err, info) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Object."
      });
    else res.send(info);
  });
};

// Retrieve all Objects from the database.
exports.findAll = (req, res) => {
  Object.getAll((err, info) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving objects."
      });
    else res.send(info);
  });
};

// Find a single Object with a objectId
exports.findOne = (req, res) => {
  Object.findById(req.params.objectId, (err, info) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Object with id ${req.params.objectId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Object with id " + req.params.objectId
        });
      }
    } else res.send(info);
  });
};

// Update a Object identified by the objectId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Object.updateById(
    req.params.objectId,
    new Object(req.body),
    (err, info) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Object with id ${req.params.objectId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Object with id " + req.params.objectId
          });
        }
      } else res.send(info);
    }
  );
};

// Delete a Object with the specified objectId in the request
exports.delete = (req, res) => {
  Object.remove(req.params.objectId, (err, info) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Object with id ${req.params.objectId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Object with id " + req.params.objectId
        });
      }
    } else res.send({ message: `Object was deleted successfully!` });
  });
};
