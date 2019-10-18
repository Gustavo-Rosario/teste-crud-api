const api = require('../api');
const path = require('path');

module.exports = function(app){
    
    app.route('/cliente')
        .post(api.cadastrarCliente);
    
    app.route('/cliente/:id')
        .get(api.buscarCliente)
        .delete(api.excluirCliente)
        .put(api.editarCliente);
    
    app.route('/clientes')
        .get(api.listarClientes);

    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
    
};