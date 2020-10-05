// importando model para o controller
const Ficha = require('../models/Ficha')

const controller = {}

//CREATE
controller.novo = async (req, res) => {
    try {
        await Ficha.create(req.body)
        //HTTP 201: CREATED
        res.status(201).end()
    }
    catch (erro) {
        console.error(erro)
        //HTTP 500: INTERNAL SERVER ERROR
        res.status(500).send(erro)
    }
}

//RETRIEVE
controller.listar = async (req, res) => {
    try {
        //listar tudo
        let dados = await Ficha.find()
            .populate('funcionario')
            .populate('produto')
        res.send(dados) //HTTP 200: OK
    }
    catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

//RETRIEVE ESPECIFICO
controller.obterUm = async (req, res) => {
    try {
        const id = req.params.id //PEGANDO O PARAMETRO ID
        let obj = await Ficha.findById(id)
            .populate('funcionario')
            .populate('produto')

        if (obj) res.send(obj)
        else res.status(404).end()
    }
    catch(erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

//UPDATE
controller.atualizar = async (req, res) => {
    try {
        const id = req.body._id // PEGANDO ID
        let obj = await Ficha.findByIdAndUpdate(id, req.body)

        if (obj) res.status(204).end() //HTTP 204: NO CONTENT
        else res.status(404).end() // HTTP 404: NOT FOUND
    }
    catch (erro) {
        console.error(erro)
        res.status(500).end()
    }
}

//DELETE
controller.excluir = async (req, res) => {
    try{
        const id = req.body._id
        let obj = await Ficha.findByIdAndDelete(id)

        if (obj) res.status(204).end()
        else res.status(404).end()
    }
    catch(erro) {
        console.error(erro)
        res.status(500).end()
    }
}

module.exports = controller