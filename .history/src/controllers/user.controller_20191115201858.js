const Usuario = require('../models/user.model')

module.exports = {
    async store(req, res) {
        const { login, senha, pessoa_id } = req.body

        const usuario = await Usuario.create({ login, senha, pessoa_id })

        return res.json(usuario)
        if (usuario)
            return res.json(usuario)
        else
            return res.status(400).json({ error: 'Erro ao cadastrar usuário' })
    }
}