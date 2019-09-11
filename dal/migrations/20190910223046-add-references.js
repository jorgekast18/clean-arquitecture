'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Points', // name of Source model
      'TypePointsId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'TypePoints',
          key: 'id'
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Points', // name of Source model
      'TypePointsId' // key we want to remove
    );
  }
};
