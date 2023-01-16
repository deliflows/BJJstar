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
   await queryInterface.bulkInsert('Students', [
    {
      schoolid: 1,
      username: "broth",
      password: "broth",
      first: "Ben",
      last: "Botch",
      belt: "White",
      years: 1,
      purpose: "Hobbyist",
      about: "Just here to workout",
      stars: 20,
      email: "broth@yahoo.com",
      dob: '1975-09-05',
      instructorid: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      schoolid: 2,
      username: "clown",
      password: "clown",
      first: "Chris",
      last: "Crown",
      belt: "Blue",
      years: 4,
      purpose: "Competitor",
      about: "WORLD/'S 2023 HERE I COME",
      stars: 200,
      email: "clown@yahoo.com",
      dob: '2000-01-05',
      instructorid: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      schoolid: 3,
      username: "gummy",
      password: "gummy",
      first: "Geo",
      last: "Grass",
      belt: "White",
      years: 3,
      purpose: "Competito",
      about: "Just here til I my Blue Belt",
      stars: 20,
      email: "gummy@yahoo.com",
      dob: '1999-02-05',
      instructorid: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
    }
};
