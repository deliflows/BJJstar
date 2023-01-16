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
   await queryInterface.bulkInsert('Instructors', [
    {
      schoolid: 1,
      username: "megacool",
      password: "megacool",
      first: "Mitch",
      last: "Mason",
      belt: "Brown",
      years: 10,
      role: "Instructor",
      about: "I harken from a Gracie Barra background and love teaching open guard",
      email: "megacool@yahoo.com",
      dob: '1999-01-17',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      schoolid: 2,
      username: "jason",
      password: "jason",
      first: "Jason",
      last: "Johnson",
      belt: "Black",
      years: 12,
      role: "Instructor",
      about: "I harken from a Lucas Lepri background and love teaching smash passes",
      email: "jason@yahoo.com",
      dob: '1990-05-23',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      schoolid: 3,
      username: "boomers",
      password: "boomers",
      first: "Brandon",
      last: "Brown",
      belt: "Brown",
      years: 5,
      role: "Instructor",
      about: "I harken from a Gordan Ryan background and love destroying people",
      email: "boomers@yahoo.com",
      dob: '1992-10-30',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Instructors', null, {});
  }
};
