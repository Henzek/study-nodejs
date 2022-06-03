const express = require('express');
const app = express();
const connection = require('./databases/database');

connection.authenticate().then(()=> console.log("Conexão realizada com sucesso")).catch((err)=> {console.log(err)});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home');
});
app.listen(80, ()=>{
    console.log("Servidor iniciado com sucesso!");
});