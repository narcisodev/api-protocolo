'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.createTable('cidades', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
        allowNull: false
      },

      sigla: Sequelize.CHAR(2),

      nome: Sequelize.STRING(30),

      estado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estados', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }


    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cidades');
  }
};
