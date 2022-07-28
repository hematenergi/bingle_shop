"use strict"
const { faker } = require("@faker-js/faker")

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
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
        },
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "admin123",
          address: faker.address.cityName(),
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
