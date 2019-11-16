const express = require('express')
const auth_middlewares = require('../middlewares/auth')
const routes = express.Router()

//controllers
const pessoa_controller = require('../controllers/pessoa.controller')
const user_controller = require('../controllers/user.controller')
const auth_controller = require('../controllers/auth.controller')


routes.use(auth_middlewares)

//Pessoas
routes.post('/pessoas', pessoa_controller.storage)
routes.get('/pessoas', pessoa_controller.index)

//Usuários
routes.post('/users', user_controller.store)
routes.get('/users', user_controller.index)

//Auth
routes.post('/auth/login', auth_controller.login)


module.exports = routes