const Cliente = require('../../models/clientModel');

const api = {};

api.cadastrarCliente = function(req,res){
    const cliente = new Cliente()
    console.log(req.body)
    cliente.nome = req.body.nome
    cliente.biografia = req.body.biografia
    cliente.nascimento = req.body.nascimento
    cliente.cpf = req.body.cpf
    cliente.especial = req.body.especial
    cliente.save(function(erro){
        if(erro){
            res.send(erro)
        }else{
            res.send('salvo')
        }
    })
};

api.buscarCliente = function(req,res) {
    Cliente.findById(req.params.id, function(error, cliente) {
        if(!error){
            res.send(cliente);
        } else{
            console.log('nao foi possivel encontrar o cliente');
        }
    });
};
api.excluirCliente = function(req,res) {
    Cliente.findByIdAndRemove(req.params.id,function(error, cliente){
        if(!error){
            res.send('cliente deletado'+cliente);
        }else{
            console.log('nao foi possivel deletar o cliente' + error);
        }
    });
};
api.listarClientes = function(req,res){
    Cliente.find({}, function(error, cliente){
        if(!error){
            res.send(cliente);
        }
    });
};
api.editarCliente = function(req,res){
    const filtro = req.params.id;
    const atualizar = {biografia: req.body.biografia};
    Cliente.findByIdAndUpdate(filtro,atualizar, function(error, cliente){
        if(!error){
            console.log(cliente);
            res.send(cliente);
        }else{
            console.log('nao foi possivel atualizar o cliente'+ error);
        }
    });
};

module.exports = api;