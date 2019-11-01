'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('pessoas', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nome_fantasia: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cpf_cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      tipo_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '1 - fisico 2 - juridico'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
    });
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoas');
  }
};
