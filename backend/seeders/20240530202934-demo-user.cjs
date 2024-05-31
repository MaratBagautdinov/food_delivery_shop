'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const bulkUsers = [
      {
        name: 'Марат',
      },
      {
        name: '_ananimus',
      },
    ]
    await queryInterface.bulkInsert('Users', bulkUsers);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
