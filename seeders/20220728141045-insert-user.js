"use strict"
const { faker } = require("@faker-js/faker")
const bcrypt = require("bcrypt")

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: bcrypt.hashSync("admin123", 12),
          address: faker.address.cityName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: bcrypt.hashSync("admin123", 12),
          address: faker.address.cityName(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {})
  },
}
