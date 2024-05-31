'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bulk = [
      {
        id: 11,
        name: 'обычный',
        slug: 'default',
        price: 750,
        photo: '',
        checked: true
      },
      {
        id: 31,
        slug: 'default',
        name: 'обычный',
        price: 700,
        photo: '',
        checked: true
      },
      {
        id: 41,
        slug: 'default',
        name: 'обычный',
        price: 800,
        photo: '',
        checked: true
      },
      {
        id: '21',
        slug: 'big',
        name: 'большой',
        price: 1050,
        photo: '',
        checked: true
      },
      {
        id: '22',
        slug: 'middle',
        name: 'средний',
        price: 850,
        photo: '',
        checked: true
      },
      {
        id: '23',
        slug: 'small',
        name: 'маленький',
        price: 650,
        photo: '',
        checked: true
      },
      {
        id: '51',
        slug: 'big',
        name: 'большой',
        price: 900,
        photo: '',
        checked: true
      },
      {
        id: '52',
        slug: 'middle',
        name: 'средний',
        price: 700,
        photo: '',
        checked: true
      },
      {
        id: '53',
        slug: 'small',
        name: 'маленький',
        price: 550,
        photo: '',
        checked: true
      },
      {
        id: 61,
        slug: 'big',
        name: 'большой',
        price: 1000,
        photo: '',
        checked: true
      },
      {
        id: 62,
        slug: 'middle',
        name: 'средний',
        price: 750,
        photo: '',
        checked: true
      },
      {
        id: 63,
        slug: 'small',
        name: 'маленький',
        price: 500,
        photo: '',
        checked: true
      }
    ]
    await queryInterface.bulkInsert('Product_variants', bulk);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_variants', null, {});
  }
};
