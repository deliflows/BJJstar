'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      School.hasMany(models.Instructor, {
        foreignKey: 'schoolid'
      })
      School.hasMany(models.Student, {
        foreignKey: 'schoolid'
      })
      School.hasMany(models.Skill, {
        foreignKey: 'schoolid'
      })
    }
  }
  School.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    umbrella: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};