'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'default_password'  // Establecer un valor por defecto
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
  }
};
