const mongoose = require('mongoose');
const Segurado = require ('../models/Segurado')

module.exports = {
    async index(req , res) {
        // Encontrar Todos
        // const segurado = await Segurado.find({});

        // return res.json(segurado);
        //const { page = 1 } = req.query;
        //const segurado = await Segurado.paginate({}, { page, limit: 10 });
        const segurado = await Segurado.find({})
        return res.json(segurado);
    },

    async show(req, res) {
        // Buscar somente um usuario por ID
        const segurado = await Segurado.findById(req.params.id);

        return res.json(segurado);
    },

    async store(req, res) {
    // Criação
    const segurado = await Segurado.create(req.body);

    return res.json(segurado);    
    },

    async update(req, res) {
        // Procura usuario pelo ID e faz alterações
        const segurado = await Segurado.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(segurado);
    },

    async destroy(req, res) {
        // Buscar por id e Remove o usuário
        await Segurado.findByIdAndRemove(req.params.id);

        return res.send();
    }
};