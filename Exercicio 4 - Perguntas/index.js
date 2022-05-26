const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

//Database (Estrutura promisse)
//Caso de erro: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha1234';
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((err) => {
    console.log(err);
  });

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
  //Select * from... RAW = pesquisa crua sem informações adicionais desnecessárias
  //order é caso queira ordernar, por padrão usa ASC
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    //render é do ejs e ele vai renderizar o arquivo que está dentro da pasta views.
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      // Pergunta encontrada
      Resposta.findAll({
        where: { perguntaId: pergunta.id,},
        order: [['id', 'DESC']]
      }).then((respostas) => {
        res.render("pergunta", { pergunta: pergunta, respostas: respostas });
      });
    } else {
      // Pergunta não encontrada
      res.redirect("/");
    }
  });
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  //INSERT INTO...
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.post("/salvarresposta", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;

  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId,
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  });
});

app.listen(80, () => {
  console.log("Servidor rodando na porta 80!");
});
