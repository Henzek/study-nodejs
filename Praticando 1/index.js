var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send("<h1>Estou mais rápido e não é decorado</h1>");
});

app.get('/:nome', (req, res)=>{
    var param = req.params;
    res.render('index', {
        nome : param.nome
    });
});

app.set('view engine', 'ejs');

app.listen(80, ()=>{
    console.log("Servidor ligado");
});