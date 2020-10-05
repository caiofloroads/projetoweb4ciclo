const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    funcionario: {
        type: mongoose.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    pago: {
        type: String,
        required: true,
        enum: ['Sim', 'Não']
    }
})

module.exports = mongoose.model('Pagamento', esquema, 'pagamentos')