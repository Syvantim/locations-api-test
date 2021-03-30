const express = require("express");

const database = require("../database/crudrepository.js");

let locationsrouter = express.Router();

locationsrouter.get("/", async (req, res) => {
  try {
    let locations = await database.findAll();
    res.send(locations);
  }
});
