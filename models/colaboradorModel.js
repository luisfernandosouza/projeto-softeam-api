const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');
const validator = require('validator');
const colaboradorSchema = Schema({
    nome: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validator.isEmail
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    funcao: {
        type: String,
        lowercase: true,
        enum: ['front-End', 'back-end', 'direção', 'gente e gestão', 'outros'],

    }
});

colaboradorSchema.pre('save', async function(next) {
    this.senha = await bcrypt.hash(this.senha, 13);
    next()
})

colaboradorSchema.methods.senhaCorreta = async function(senhaTeste, senhaOriginal) {
    return await bcrypt.compare(senhaTeste, senhaOriginal);
}



const Colaborador = model('Colaborador', colaboradorSchema);

module.exports = Colaborador;