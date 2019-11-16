const Usuario = require('../models/user.model')

module.exports = {
    async store(req, res) {
        const { login, senha, pessoa_id } = req.body

        try {
            const usuario = await Usuario.create({ login, senha, pessoa_id })

            return res.json(usuario)
        } catch (erro) {
            return res.status(400).json({ error: erro })
        }



    }
}