const express = require('express');
const BodyParser = require('body-parser');
const connection = require('./database/database');
const bodyParser = require('body-parser');
const app = express();


connection.authenticate().then(()=>{
    console.log("Conectado ao banco com sucesso!");
}).catch((err)=>{
    console.log(err);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(80, ()=>{
    console.log("Servidor iniciado com sucesso!");
})