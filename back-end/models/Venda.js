const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    vendedor: {
        type: mongoose.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    produto: {
        type: mongoose.ObjectId,
        ref: 'Produto',
        required: true
    },
    pecas_vendidas: {
        type: Number,
        required: true
    },
    comissao_vendedor: {
        type: Number,
        required: true
    },
    total_venda: {
        type: Number,
        required: true
    },
    total_vendedor: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Venda', esquema, 'vendas')