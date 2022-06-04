const Sequelize = require('sequelize');
const connection = new Sequelize('blog', 'root', 'senha1234',{
    host: 'localhost',
    dialect :'mysql'
});

module.exports = connection;