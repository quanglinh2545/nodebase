'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cvs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cvs.init({
    candidate_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    position_id: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    experience: DataTypes.STRING,
    send_email: DataTypes.BOOLEAN,
    zalo_contact: DataTypes.BOOLEAN,
    phone_contact: DataTypes.BOOLEAN,
    zalo_contact_result: DataTypes.BOOLEAN,
    phone_contact_result: DataTypes.BOOLEAN,
    email_contact_result: DataTypes.BOOLEAN,
    cv_result: DataTypes.BOOLEAN,
    cv_url: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cvs',
  });
  return cvs;
};