const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' })
    }
}

module.exports = Usuario