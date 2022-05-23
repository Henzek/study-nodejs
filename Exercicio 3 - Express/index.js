const express = require("express"); //Importando express
const app = express(); //Iniciando o express

// http://localhost:4000/QualquerCoisa
app.get("/:nome?", function (req, res) {
  // ? <- é igual a não obrigatório
  let nome = req.params.nome;
  if (nome) {
    res.send("Bem vindo ao meu site! " + nome);
  } else {
    res.send("Bem vindo ao meu site, novato!");
  }
});

// http://localhost:4000/testequery/query?teste=testando
app.get("/testequery/query", function (req, res) {
  let query = req.query["teste"];
  if (query) {
    res.send("<h1>" + query + "</h1>");
  } else {
    res.send("Não foi passado nenhum parametro");
  }
});

// http://localhost:4000/teste/Henzek/Kateti
app.get("/teste/:nome/:empresa", function (req, res) {
  let nome = req.params.nome;
  let empresa = req.params.empresa;
  res.send("Oi " + nome + " da " + empresa);
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
