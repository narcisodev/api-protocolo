const Usuario = require('../models/user.model')
const bcrypt = require('bcryptjs')

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
                return res.json(usuario)
            }
        }

        return res.status(400).json({ error: 'Usuário ou senha inválidos' })

    }
}