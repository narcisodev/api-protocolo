const Usuario = require('../models/user.model')
const Pessoa = require('../models/pessoa.model')
const bcrypt = require('bcryptjs')

module.exports = {

    async index(req, res) {
        const usuarios = await Usuario.findAll({
            include: [{association: 'pessoa'}],
            attributes: { 
                exclude: ['senha']
            }
        })

        return res.status(200).json(usuarios)

    },

    async store(req, res) {
        const { login, pass, pessoa_id } = req.body

        const usuario_pessoa = await Usuario.findOne({
            where: {
                pessoa_id: pessoa_id
            }
        })

        if (usuario_pessoa)
            return res.status(400).json({ error: 'Usuário já está cadastrado' })

        try {

            senha = await bcrypt.hash(pass, 10)

            const usuario = await Usuario.create({ login, senha, pessoa_id })
            return res.json(usuario)

        } catch (erro) {
            return res.status(500).json({ error: 'Erro ao inserir o usuário', err: erro })
        }



    }
}