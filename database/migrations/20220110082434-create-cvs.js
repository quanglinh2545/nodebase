'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cvs', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      candidate_name: {
        type: Sequelize.STRING(191),
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING(191),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(191),
        allowNull: false
      },
      position_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model:'positions',
          key:'id'
        },
        onUpdate: 'cascade',
        ondelete: 'cascade'
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      experience: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      send_email: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      zalo_contact: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      phone_contact: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      zalo_contact_result: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      phone_contact_result: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      email_contact_result: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      cv_result: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
      },
      cv_url: {
        type: Sequelize.STRING(191),
        allowNull: false
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
    await queryInterface.dropTable('cvs');
  }
};