'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.School, {
        foreignKey: 'schoolid',
        onDelete: 'CASCADE'
      })
      Student.belongsTo(models.Instructor, {
        foreignKey: 'instructorid',
        onDelete: 'CASCADE'
      })
      Student.hasMany(models.Skill, {
        foreignKey: 'studentid'
      })
      Student.hasMany(models.OtherSkill, {
        foreignKey: 'studentid'
      })
    }
  }
  Student.init({
    schoolid: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    belt: DataTypes.STRING,
    years: DataTypes.INTEGER,
    purpose: DataTypes.STRING,
    about: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    instructorid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};