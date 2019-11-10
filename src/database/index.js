const Sequelize = require('sequelize')
const dbConfig = require('../config/dbconfig')

//Require modules

//start connection
const connection = new Sequelize(dbConfig);

//connection to modules
const Pessoa = require('../models/pessoa.model')
Pessoa.init(connection)


module.exports = connection