"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_payments", {
      payment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_orders",
          key: "order_id",
        },
      },
      payment_name: {
        type: Sequelize.STRING,
      },
      payment_amount: {
        type: Sequelize.INTEGER,
      },
      payment_status: {
        type: Sequelize.STRING,
      },
      payment_date: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbl_payments")
  },
}
