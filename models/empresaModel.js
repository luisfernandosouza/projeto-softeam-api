const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const empresaSchema = Schema({
    nome: {
        type: String,
        required: true,
        lowercase: true
    },
    endereco: {
        type: String,
        required: true
    },
    CNPJ: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

const Empresa = model('Empresa', empresaSchema);

module.exports = Empresa;