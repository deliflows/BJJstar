'use strict';

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
   await queryInterface.bulkInsert('Skills', [
    {
      studentid: 1,
      category: 'Mount',
      name: 'Armbar from mount',
      instructorid: 1,
      comment: 'Things I need to remember to do this move,',
      youtube: null,
      url: null,
      learnedfrom: null,
      schoolid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentid: 2,
      category: 'De La Riva',
      name: 'Sweep to Back',
      instructorid: 2,
      comment: 'Things I need to remember to do this move,',
      youtube: 'blah',
      url: 'blah',
      learnedfrom: 'blah',
      schoolid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      studentid: 3,
      category: 'X guard',
      name: 'Standard X Guard Sweep',
      instructorid: 3,
      comment: 'Things I need to remember to do this move,',
      youtube: 'blah',
      url: 'blah',
      learnedfrom: 'blah',
      schoolid: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
