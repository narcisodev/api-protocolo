const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

//Require modules

//start connection
const connection = new Sequelize(dbConfig);

//connection to modules
const Pessoa = require('../models/pessoa.model')
const Usuario = require('../models/user.model')

Usuario.init(connection)
Usuario.associate(connection.models)

Pessoa.init(connection)


module.exports = connection