const Sequelize = require('sequelize');

const connection = new Sequelize('treino', 'root', 'senha1234',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
