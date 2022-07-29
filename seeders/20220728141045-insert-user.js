"use strict"

const { generateFakeUser } = require("../utils/helper")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tbl_users", generateFakeUser(20), {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_users", null, {})
  },
}
