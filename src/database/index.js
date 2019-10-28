const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

//Require modules

//start connection
const connection = new Sequelize(dbConfig)

//connection to modules


module.exports = connection