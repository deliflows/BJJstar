'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsTo(models.School, {
        foreignKey: 'schoolid',
        onDelete: 'CASCADE'
      })
      Skill.belongsTo(models.Instructor, {
        foreignKey: 'instructorid',
        onDelete: 'CASCADE'
      })
      Skill.belongsTo(models.Student, {
        foreignKey: 'studentid',
        onDelete: 'CASCADE'
      })
    }
  }
  Skill.init({
    studentid: DataTypes.INTEGER,
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    instructorid: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    youtube: DataTypes.STRING,
    url: DataTypes.STRING,
    learnedfrom: DataTypes.STRING,
    schoolid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};