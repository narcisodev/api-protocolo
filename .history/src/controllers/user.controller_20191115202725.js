const Usuario = require('../models/user.model')

module.exports = {
    async store(req, res) {
        const { login, senha, pessoa_id } = req.body

        const usuario = await Usuario.create({ login, senha, pessoa_id })
            .catch(err => {
                return res.json({ error: err })
            })
        return res.json(usuario)


    }
}