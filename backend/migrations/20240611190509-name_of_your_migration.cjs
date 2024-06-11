module.exports = {
  up: function (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'Products',
      'desc',
      Sequelize.TEXT
    );

  },

  down: function (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'Products',
      'desc'
    );
  }
}