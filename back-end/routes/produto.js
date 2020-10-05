const controller = require('../controllers/produto')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo) //CREATE
router.get('/', controller.listar) //RETRIEVE
router.get('/:id', controller.obterUm) //RETRIEVE ESPECIFICO
router.put('/', controller.atualizar) //UPDATE
router.delete('/', controller.excluir) //DELETE

module.exports = router