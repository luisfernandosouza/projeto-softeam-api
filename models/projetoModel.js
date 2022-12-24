const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projetoSchema = new Schema({
    nome: {
        type: String,
        lowercase: true,
        required: true
    },
    decricrao: {
        type: String,
        required: true
    },
    status: {
        type: String,
        lowercase: true,
        enum: ['prospectado', 'producao', 'finalizado'],
        required: true
    },
    valor: {
        type:Number,
        required: true
    },
    colaboradores: {
        type: [{type: Schema.Types.ObjectId, ref: 'Colaborador'}],
    },
    empresas: {
        type: [{type: Schema.Types.ObjectId, ref: 'Empresa'}]
    }
});

const Projeto = model('Projeto', projetoSchema);

module.exports = Projeto;