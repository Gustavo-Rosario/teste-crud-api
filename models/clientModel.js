const mongoose = require('mongoose');  

const ClienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    biografia: {type: String, minlength: 10, required: true},
    nascimento: {type: Date, required:true},
    cpf: {type: Number, maxlength: 15, required:true},
    especial: {type: Boolean, required:true}

  });
  
module.exports = mongoose.model('Client', ClienteSchema, 'lucas');