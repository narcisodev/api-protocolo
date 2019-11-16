'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
        allowNull: false
      },

      cep: Sequelize.STRING(8),

      bairro: Sequelize.STRING(30),

      logradouro: Sequelize.STRING(45),

      numero: Sequelize.STRING(10),

      complemento: Sequelize.STRING,

      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas', key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
      },

      cidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cidades', key: 'id'
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT'
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
    return queryInterface.dropTable('enderecos');
  }
};
