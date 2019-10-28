const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SeguradoSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true },
    cpf: { type: String, required: true },
    nascimento: { type: Date, required: true },
    dsinistro: {type: Date, required: true },
    descricao: {type: String, required: true },
    condutor: {type: Boolean, required: true}
});

SeguradoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Segurado', SeguradoSchema, 'guilherme');
