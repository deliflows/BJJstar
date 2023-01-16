'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OtherSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OtherSkill.belongsTo(models.Student, {
        foreignKey: 'studentid',
        onDelete: 'CASCADE'
      })
    }
  }
  OtherSkill.init({
    studentid: DataTypes.INTEGER,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.STRING,
    youtube: DataTypes.STRING,
    url: DataTypes.STRING,
    learnedfrom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OtherSkill',
  });
  return OtherSkill;
};