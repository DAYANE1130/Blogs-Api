'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        // field:'id',
        allowNull: false,
        references:{
          model:'BlogPosts', // aqui é o nome da tabela
          key:'id' //postId
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        primaryKey: true,
        
      },
      categoryId: {
        type: Sequelize.INTEGER,
        // field:'id',
        allowNull: false,
        references:{
          model:'Categories',
          key:'id' //categoryId
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        primaryKey: true,
        
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};