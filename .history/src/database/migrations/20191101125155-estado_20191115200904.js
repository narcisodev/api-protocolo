'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('estados', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      sigla: {
        type: Sequelize.CHAR(2),
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false
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
    return queryInterface.dropTable('estados');
  }
};
