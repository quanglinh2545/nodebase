'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      cv_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: 'cvs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      result_status: {
        allowNull: true,
        type: Sequelize.STRING(191)
      },
      confirm_to_work: {
        defaultValue: 0,
        type: Sequelize.BOOLEAN
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      leader_name: {
        allowNull: true,
        type: Sequelize.STRING(191)
      },
      note: {
        allowNull: true,
        type: Sequelize.STRING(500)
      },
      created_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('results');
  }
};