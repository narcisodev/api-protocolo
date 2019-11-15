const { Model, DataTypes } = require('sequelize')

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            cep: DataTypes.STRING,
            bairro: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,

        })
    }
}