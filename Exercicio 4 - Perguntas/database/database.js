const Sequelize = require("sequelize");

const connection = new Sequelize("estudos", "root", "senha1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;