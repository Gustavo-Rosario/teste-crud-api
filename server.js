
const express= require('express');
const morgan = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const banco = require('./banco');
const routes = require('./app/rotas');

const porta = 8000;

app.use(express.static('./public'));
app.use(bodyparser.urlencoded({extended: true }));
app.use(bodyparser.json());


app.listen(porta, function(){
    console.log('servidor rodando na porta '+ porta);
});

app.use(morgan('dev'));


module.exports = routes(app);