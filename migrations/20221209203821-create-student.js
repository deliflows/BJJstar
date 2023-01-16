'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Schools',
          key: 'id',
          as: 'schoolid'
        }
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      first: {
        type: Sequelize.STRING
      },
      last: {
        type: Sequelize.STRING
      },
      belt: {
        type: Sequelize.STRING
      },
      years: {
        type: Sequelize.INTEGER
      },
      purpose: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      stars: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        unique:true
      },
      dob: {
        type: Sequelize.DATE
      },
      instructorid: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Instructors',
          key: 'id',
          as: 'instructorid'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};