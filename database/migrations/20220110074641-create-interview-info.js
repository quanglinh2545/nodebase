'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('interview_infos', {
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
      interviewer_name: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      interview_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      interview_url: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      question_form_url: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      note: {
        allowNull: true,
        type: Sequelize.STRING(250)
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
    await queryInterface.dropTable('interview_infos');
  }
};