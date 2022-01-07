const Sequelize = require("sequelize");

const connection = new Sequelize(
  "mysql://Darwin:123@localhost:3306/projet"
);

connection.authenticate().then(() => console.log("Database connected"));

module.exports = connection;
