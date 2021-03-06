const { Model, DataTypes } = require('sequelize')

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            nome_fantasia: DataTypes.STRING,
            cpf_cnpj: DataTypes.STRING,
            tipo_pessoa: DataTypes.INTEGER
        }, {    
            sequelize,
        })      
    }
}

module.exports = Pessoa