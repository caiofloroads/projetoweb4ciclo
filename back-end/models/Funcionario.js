const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true //Atributo obrigatorio
    },
    cpf: {
        type: String,
        required: true,
        index: { unique: true}
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    funcao: {
        type: String,
        required: true,
        enum: ['Costureira', 'Cortador', 'Vendedor']
    }
})

module.exports = mongoose.model('Funcionario', esquema, 'funcionarios')