'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const bulk =
      [
        {
          id: "1",
          name: "Бургер 1",
          slug: "burger-1",
          catalog_id: "1",
          checked: true,
          variants: [11]
        },
        {
          id: "3",
          name: "Бургер 2",
          slug: "burger-2",
          catalog_id: "1",
          checked: true,
          variants: [31]
        },
        {
          id: "4",
          name: "Бургер 3",
          slug: "burger-3",
          catalog_id: "1",
          checked: true,
          variants: [41]
        },
        {
          id: "2",
          name: "Пицца 1",
          slug: "pizza-1",
          catalog_id: "2",
          checked: true,
          variants: [21, 22, 23]
        },
        {
          id: "5",
          name: "Пицца 2",
          slug: "pizza-2",
          catalog_id: "2",
          checked: true,
          variants: [51, 52, 53]
        },
        {
          id: "6",
          name: "Пицца 3",
          slug: "pizza-3",
          catalog_id: "2",
          checked: true,
          variants: [61, 62, 63]
        }
      ]
    await queryInterface.bulkInsert('Products', bulk);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
