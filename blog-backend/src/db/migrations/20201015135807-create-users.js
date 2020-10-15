'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      token: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      username:{
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      role_id: {
        type: Sequelize.INTEGER,
        references:{model:'roles',key:'id'}
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};