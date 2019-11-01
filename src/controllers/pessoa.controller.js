const Pessoa = require('../models/pessoa.model')

module.exports = {
    async index(req, res) {

        const pessoas = await Pessoa.findAll()

        return res.json(pessoas)
    },

    async storage(req, res){
        const { nome, nome_fantasia, cpf_cnpj, tipo_pessoa } = req.body

        const pessoa = await Pessoa.create({
            nome, nome_fantasia, cpf_cnpj, tipo_pessoa
        })

        return res.json(pessoa)

    }

    
}