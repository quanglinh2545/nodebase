'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interview_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  interview_info.init({
    interview_url: DataTypes.STRING,
    question_form_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'interview_info',
  });
  return interview_info;
};