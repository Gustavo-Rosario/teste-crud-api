const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const requireDir = require('require-dir');
const routes = require('./src/routes');
const bodyParser = require('body-parser');

// Iniciando o APP
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Iniciando o DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://testes:testes@kit-corretor-axa-dev.onibusiness.com.br:27017/testes',
{
    useUnifiedTopology: true
})

// function (err) {    
//     if(err) {
//         console.log('Não conectado a database' + err);
//     } else {
//         console.log('Conectado com sucesso ao MongoDB');
//     };
// });
// require('./src/models/Segurado');

// Rotas
app.use(cors());
app.use(express.json());
app.use('/api' , require("./src/routes"));
app.listen(3001);