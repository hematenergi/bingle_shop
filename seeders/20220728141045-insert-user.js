"use strict"
const { faker } = require("@faker-js/faker")
const bcrypt = require("bcrypt")

const generateFakeUser = (qty) => {
  let user = []
  for (let i = 0; i < qty; i++) {
    user.push({
      name: faker.name.firstName(),
      email: faker.internet.email().toLowerCase(),
      password: bcrypt.hashSync("admin123", 12),
      address: faker.address.cityName(),
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
  return user
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", generateFakeUser(100), {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
  },
}
