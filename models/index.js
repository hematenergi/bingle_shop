const tbl_users = require("./users.model")
const tbl_items = require("./items.model")
const tbl_orders = require("./orders.model")
const tbl_order_items = require("./orderItems.model")

const sequelize = require("./sequelizeConfig")

tbl_items.belongsToMany(tbl_orders, {
  through: "tbl_order_items",
  foreignKey: "item_id",
  as: "items_orders",
})

tbl_orders.belongsToMany(tbl_items, {
  through: "tbl_order_items",
  foreignKey: "order_id",
  as: "orders_items",
})

module.exports = {
  sequelize,
  tbl_users,
  tbl_items,
  tbl_orders,
  tbl_order_items,
}
