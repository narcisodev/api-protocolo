const Pessoa = require('../models/pessoa.model')

module.exports = {
    async index(req, res) {

        const pessoas = await Pessoa.findAll()

        return res.json(pessoas)
    },

    async storage(req, res){
        const { nome, nome_fantasia, cpf_cnpj, tipo_pessoa } = req.body
            
        const pessoa_find = await Pessoa.findOne({
            where: {
                cpf_cnpj: cpf_cnpj
            }
        })

        if(pessoa_find){
            return res.status(400).json({error: 'CPF ou CNPJ já se encontra cadastrado'})
        }

        try{
            const pessoa = await Pessoa.create({
                nome, nome_fantasia, cpf_cnpj, tipo_pessoa
            })
        }catch(error){
            return  res.status(400).json({error: 'Erro na criação de pessoa', error_description: error.errors[0].message})
        }

        return res.json(pessoa)
    }

    
}