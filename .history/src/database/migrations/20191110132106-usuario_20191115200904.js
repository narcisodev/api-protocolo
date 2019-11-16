'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
        allowNull: false
      },

      login: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas', key: 'id'
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
    return queryInterface.dropTable('cidades');
  }
};
