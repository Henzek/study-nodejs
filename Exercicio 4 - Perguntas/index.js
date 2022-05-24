const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Aqui estou definindo qual vai ser minha view engine.
app.set("view engine", "ejs");
//Tenho que criar o diretorio que vai conter as views (HTML).

//Aqui é aonde fica os arquivos estáticos (CSS, JS, imagens).
app.use(express.static("public"));

//Comando que vai permitir a pessoa enviar dados do formulário para traduzir pro Back-End.
app.use(bodyParser.urlencoded({ extended: false }));
//Opcional: Para ler dados de formulário em JSON.
app.use(bodyParser.json());

app.get("/", (req, res) => {
  //render é do ejs e ele vai renderizar o arquivo que está dentro da pasta views.
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Título: " + titulo + " <br> Descrição: " + descricao);
});

app.listen(80, () => {
  console.log("Servidor rodando na porta 80!");
});
