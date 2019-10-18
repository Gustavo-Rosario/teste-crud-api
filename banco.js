const mongoose = require('mongoose');

mongoose.connect('mongodb://testes:testes@kit-corretor-axa-dev.onibusiness.com.br:27017/testes',
{ useNewUrlParser: true, useUnifiedTopology: true  }, function(erro){
    if(erro){
        console.log('nao conectado');
    } else {
        console.log('conectado ao banco');
    }
});

