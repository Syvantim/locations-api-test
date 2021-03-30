var express = require("express");
var router = express.Router();
const locationsrouter = express.Router();
const path = require("path");

locationsrouter.get("/api/locations", (req, res) => {
  res.send("fetch all locations");
});
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
