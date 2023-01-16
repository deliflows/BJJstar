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
   await queryInterface.bulkInsert('Schools', [
    {
      name: "Blee BJJ",
      location: "101 Eastmont Dr, Knoxville Tn 37875",
      umbrella: "Gracie Barra",
      phone: "865-555-5555",
      website: "www.bleeBJJ.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ryan BJJ",
      location: "101 Bulkmont Dr, Nashville TN 37875",
      umbrella: "Lucas Lepri",
      phone: "900-555-5555",
      website: "www.ryanBJJ.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kamry BJJ",
      location: "101 Potters St, Greeneville Tn 44444",
      umbrella: "Gordan Ryan",
      phone: "800-555-5555",
      website: "www.kamryBJJ.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Schools', null, {});
  }
};
