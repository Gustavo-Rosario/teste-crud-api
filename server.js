
const express= require('express');
const morgan = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const banco = require('./banco');
const routes = require('./app/rotas');
const cors = require('cors')

const porta = process.env.PORT|| 8888

app.use(cors())
app.use(express.static('./public'));
app.use(bodyparser.urlencoded({extended: true }));
app.use(bodyparser.json());


app.listen(porta, function(){
    console.log('servidor rodando na porta '+ porta);
});

app.use(morgan('dev'));




module.exports = routes(app);