const express = require('express')
const routes = express.Router()

//controllers
const pessoa_controller = require('../controllers/pessoa.controller')

routes.get('/', (req, res) => {
    return res.json({ ok: 'Conectado com sucesso!' })
})

//Pessoas
routes.post('/pessoas', pessoa_controller.storage)
routes.get('/pessoas', pessoa_controller.index)

//Usuários
routes.post('/users', )


module.exports = routes