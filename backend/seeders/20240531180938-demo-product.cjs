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
          variants: JSON.stringify([{
            "id": 11,
            "name": "обычный",
            "slug": "default",
            "price": 750,
            "photo": "",
            "checked": true
          }])
        },
        {
          id: "3",
          name: "Бургер 2",
          slug: "burger-2",
          catalog_id: "1",
          checked: true,
          variants: JSON.stringify([{
            "id": 31,
            "slug": "default",
            "name": "обычный",
            "price": 700,
            "photo": "",
            "checked": true
          }])
        },
        {
          id: "4",
          name: "Бургер 3",
          slug: "burger-3",
          catalog_id: "1",
          checked: true,
          variants: JSON.stringify([{
            "id": 41,
            "slug": "default",
            "name": "обычный",
            "price": 800,
            "photo": "",
            "checked": true
          }])
        },
        {
          id: "2",
          name: "Пицца 1",
          slug: "pizza-1",
          catalog_id: "2",
          checked: true,
          variants: JSON.stringify([
            {
              "id": 21,
              "slug": "big",
              "name": "большой",
              "price": 1050,
              "photo": "",
              "checked": true
            },
            {
              "id": 22,
              "slug": "middle",
              "name": "средний",
              "price": 850,
              "photo": "",
              "checked": true
            },
            {
              "id": 23,
              "slug": "small",
              "name": "маленький",
              "price": 650,
              "photo": "",
              "checked": true
            }
          ])
        },
        {
          id: "5",
          name: "Пицца 2",
          slug: "pizza-2",
          catalog_id: "2",
          checked: true,
          variants: JSON.stringify([
            {
              "id": 51,
              "slug": "big",
              "name": "большой",
              "price": 900,
              "photo": "",
              "checked": true
            },
            {
              "id": 52,
              "slug": "middle",
              "name": "средний",
              "price": 700,
              "photo": "",
              "checked": true
            },
            {
              "id": 53,
              "slug": "small",
              "name": "маленький",
              "price": 550,
              "photo": "",
              "checked": true
            }
          ])
        },
        {
          id: "6",
          name: "Пицца 3",
          slug: "pizza-3",
          catalog_id: "2",
          checked: true,
          variants: JSON.stringify([
            {
              "id": 61,
              "slug": "big",
              "name": "большой",
              "price": 1000,
              "photo": "",
              "checked": true
            },
            {
              "id": 62,
              "slug": "middle",
              "name": "средний",
              "price": 750,
              "photo": "",
              "checked": true
            },
            {
              "id": 63,
              "slug": "small",
              "name": "маленький",
              "price": 500,
              "photo": "",
              "checked": true
            }
          ])
        }
      ]
    await queryInterface.bulkInsert('Products', bulk);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
