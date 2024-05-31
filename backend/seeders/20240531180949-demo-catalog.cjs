'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bulk = [
      {
        id: "1",
        name: "Бургер",
        slug: "burgers"
      },
      {
        id: "2",
        name: "Пицца",
        slug: "pizza"
      }
    ]
    await queryInterface.bulkInsert('Catalogs', bulk);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Catalogs', null, {});
  }
};
