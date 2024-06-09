'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const bulkUsers = [
      {
        name: 'ADMIN',
        phone: '9968265825',
        password: 'admin',
      }
    ]
    await queryInterface.bulkInsert('Users', bulkUsers);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
