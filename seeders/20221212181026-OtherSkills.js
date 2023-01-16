'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('OtherSkills', [
    {
      studentid: 1,
      category: 'Closed Guard',
      name: 'Classic Armbar from Closed Guard',
      comment: 'Things I need to remember to do this move',
      youtube: null,
      url: null,
      learnedfrom: 'Greg Thompson',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentid: 2,
      category: 'Closed Guard',
      name: 'Scissor Sweep',
      comment: 'Things I need to remember to do this move',
      youtube: null,
      url: null,
      learnedfrom: 'Allison Wayward',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentid: 3,
      category: 'Spider Guard',
      name: 'Three points of contact sweep',
      comment: 'Things I need to remember to do this move',
      youtube: null,
      url: null,
      learnedfrom: 'Cannot remember',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OtherSkills', null, {});
  }
};
