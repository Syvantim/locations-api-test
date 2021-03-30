var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "test",
});

connection.connect();

applicationCache.get("api/locations", (req, res) => {
  connection.query("SELECT * from Locations", (error, locations) => {
    if (error) throw error;
  });
});

connection.query("SELECT 1 + 1 AS solution", function (error, results) {
  if (error) throw error;
  locations.forEach((location) => console.log(location));
});

connection.end();
