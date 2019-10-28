const express = require('express');
const routes = express.Router();

const SeguradoController = require('./controllers/SeguradoController');

routes.get('/segurados', SeguradoController.index);
routes.get('/segurados/:id', SeguradoController.show);
routes.post('/segurados', SeguradoController.store);
routes.put('/segurados/:id', SeguradoController.update);
routes.delete('/segurados/:id', SeguradoController.destroy);

module.exports = routes;

// (req, res) => {
//     Segurado.create({
//         nome: req.body.nome,
//         cpf: req.body.cpf,
//         descricao: req.body.descricao,
//         dsinistro: req.body.dsinistro,
//         nascimento: req.body.nascimento,
//         condutor: req.body.condutor
//     });

//     return res.send('Hello Rocketseat')
// }