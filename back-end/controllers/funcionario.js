// importando model para o controller
const Funcionario = require('../models/Funcionario')

const controller = {}

controller.novo = async (req, res) => {
    try {
        await Funcionario.create(req.body)
        //HTTP 201: CREATED
        res.status(201).end()
    }
    catch(erro) {
        console.error(erro)
        //HTTP 500: INTERNAL SERVER ERROR
        res.status(500).send(erro)
    }
}

module.exports = controller