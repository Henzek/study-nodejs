const Sequelize = require("sequelize");
const connection = require("./database");

//Isso é um MODEL
//Codigo abaixo serve para criar uma tabela no banco de dados.
const Pergunta = connection.define("perguntas", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

//Pra não força a criação da tabela caso ela já exista
Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela iniciada com sucessso!");
});

module.exports = Pergunta;