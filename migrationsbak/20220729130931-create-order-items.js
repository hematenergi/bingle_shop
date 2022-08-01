"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbl_order_items", {
      order_items_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tbl_orders",
          key: "order_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tbl_items",
          key: "item_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      total_price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("tbl_order_items")
  },
}
