'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const bulkUsers = [
      {
        name: 'Марат',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '_ananimus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    await queryInterface.bulkInsert('Users', bulkUsers);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
