const sql = require("./db.js");

// constructor
const Object = function(object) {
  this.name = object.name;
  this.data = object.data;
};

Object.create = (newObject, result) => {
  sql.query("INSERT INTO objects SET ?", newObject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created object: ", { id: res.insertId, ...newObject });
    result(null, { id: res.insertId, ...newObject });
  });
};

Object.findById = (objectId, result) => {
  sql.query(`SELECT * FROM objects WHERE id = ${objectId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found object: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Object with the id
    result({ kind: "not_found" }, null);
  });
};

Object.getAll = result => {
  sql.query("SELECT * FROM objects", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("objects: ", res);
    result(null, res);
  });
};

Object.updateById = (id, object, result) => {
  sql.query(
    "UPDATE objects SET data = ?, name = ?, WHERE id = ?",
    [object.data, object.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Object with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated object: ", { id: id, ...object });
      result(null, { id: id, ...object });
    }
  );
};

Object.remove = (id, result) => {
  sql.query("DELETE FROM objects WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Object with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted object with id: ", id);
    result(null, res);
  });
};

module.exports = Object;
