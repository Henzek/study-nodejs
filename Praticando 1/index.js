var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.send('<h1>Olá eu estou aberto corretamente </h1>');
});

app.get('/pagina/:nome', (req, res)=>{
    var nome = req.params.nome;
    res.render('pagina', {
        nome: nome
    });
});



app.listen(80, ()=>{
    console.log("Servidor iniciado com sucesso!");
});