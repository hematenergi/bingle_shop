"use strict"

const { generateFakeItem } = require("../utils/helper")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tbl_items", generateFakeItem(10), {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_items", null, {})
  },
}
