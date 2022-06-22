'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      sinopsis:{
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      edad_minima: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      preciop: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Peliculas');
  }
};