'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      userId:{
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references:{
        model:'Users',
        key:'id'
      }
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'published',
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated',
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};