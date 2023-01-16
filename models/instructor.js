'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instructor.belongsTo(models.School, {
        foreignKey: 'schoolid',
        onDelete: 'CASCADE'
      })
      Instructor.hasMany(models.Student, {
        foreignKey: 'instructorid'
      })
      Instructor.hasMany(models.Skill, {
        foreignKey: 'instructorid'
      })
    }
  }
  Instructor.init({
    schoolid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    belt: DataTypes.STRING,
    years: DataTypes.INTEGER,
    role: DataTypes.STRING,
    about: DataTypes.STRING,
    email: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};