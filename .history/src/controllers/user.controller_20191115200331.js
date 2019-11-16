const Usuario = require('../models/user.model')

module.exports = {
    async store(req, res){
        const { login, senha, pessoa_id } = req.body

        await Usuario.create({login, senha, pessoa_id})

    }
}