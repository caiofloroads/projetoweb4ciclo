const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true //Atributo obrigatorio
    },
    valor: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Produto', esquema, 'produtos')