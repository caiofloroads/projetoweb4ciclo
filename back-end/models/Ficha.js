const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    funcionario: {
        type: mongoose.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    produto: {
        type: mongoose.ObjectId,
        ref: 'Produto ',
        required: true
    },
    qtde_pecas: {
        type: Number,
        required: true
    },
    valor_total_ficha: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Ficha', esquema, 'fichas')