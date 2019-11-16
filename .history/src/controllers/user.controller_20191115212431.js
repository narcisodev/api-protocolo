const Usuario = require('../models/user.model')

module.exports = {
    async store(req, res) {
        const { login, senha, pessoa_id } = req.body

        const usuario_pessoa = await Usuario.findOne({
            where: {
                pessoa_id: pessoa_id
            }
        })

        if (usuario_pessoa)
            return res.status(400).json({ error: 'Usuário já está cadastrado'})

        try {

            const usuario = await Usuario.create({ login, senha, pessoa_id })
            return res.json(usuario)

        } catch (erro) {
            return res.status(400).json({ error:'Erro ao inserir o usuário'})
        }



    }
}