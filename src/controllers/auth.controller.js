const Usuario = require('../models/user.model')
const bcrypt = require('bcryptjs')
const auth_config = require('../config/auth')
const jwt = require('jsonwebtoken')

module.exports = {
    async login(req, res) {
        const { login, pass } = req.body


        const usuario = await Usuario.findOne({
            where: { login: login },
            include: { association: "pessoa" }
        })

        if (usuario) {
            if (await bcrypt.compare(pass, usuario.senha)) {
                usuario.senha = undefined
                return res.json({ usuario, token: generateToken({ id: usuario.id }) })
            }
        }

        return res.status(400).json({ error: 'Usuário ou senha inválidos' })

    },
}

function generateToken(params = {}) {
    return jwt.sign({ params }, auth_config.key_secret, {
        expiresIn: 86400, //tempo de expiração dado em segundos
    })
}