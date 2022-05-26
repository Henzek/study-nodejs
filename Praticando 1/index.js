var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/:nome?', (req, res)=>{
    var nome = req.params.nome;
    if(!nome){
        nome = "Henzek!";
    }
    res.render('index', {
        nome: nome
    });
});


app.listen(80, ()=>{
    console.log("Servidor iniciado com sucesso!");
});