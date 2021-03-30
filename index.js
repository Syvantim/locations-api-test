const mysql = require("mysql");
/*const express = require("express");
const app = express();*/
const mariaconfig = require("./database/mariadbconfig.js");
const port = process.env.PORT || 8080;
const connection = mysql.createConnection(mariaconfig);
/*app.use(express.static("public"));*/
connection.connect();
connection.query(
  "INSERT INTO locations (latitude, longitude) values (?, ?)",
  [60, 60],
  (error, results, fields) => {
    console.log(error);
    console.log(results);
    console.log(fields);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  }
);

//http://localhost:3000/taikaviitta
/*app.get("/taikaviitta", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});*/
