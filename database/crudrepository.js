const { createConnection } = require("mysql");

connection.connect();

const funkkareita = {
  findAll: () => {
    function funkkari(resolve, reject) {
      connection.query("SELECT * from Locations", error);
    }
    createConnection.query("SELECT * from Locations", error);
  },
};
