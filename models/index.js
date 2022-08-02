const tbl_users = require("./users.model")
const tbl_items = require("./items.model")
const tbl_orders = require("./orders.model")
const tbl_order_items = require("./orderItems.model")

const sequelize = require("./sequelizeConfig")

// tbl_users.hasMany(tbl_orders, {
//   as: "orders",
//   foreignKey: "user_id",
// })

// tbl_orders.belongsTo(tbl_users, {
//   as: "user",
//   foreignKey: "user_id",
// })

// tbl_orders.belongsToMany(tbl_items, {
//   through: "tbl_order_items",
//   as: "item",
//   foreignKey: "order_id",
//   // otherKey: "item_id",
// })

// tbl_orders.hasMany(tbl_order_items, {
//   as: "order",
//   foreignKey: "order_id",
// })

// tbl_items.belongsToMany(tbl_orders, {
//   through: "tbl_order_items",
//   as: "order",
//   foreignKey: "item_id",
//   // otherKey: "order_id",
// })

// tbl_items.hasMany(tbl_order_items, {
//   as: "item",
//   foreignKey: "item_id",
// })

// tbl_order_items.belongsTo(tbl_orders, {
//   as: "order",
//   foreignKey: "order_id",
// })

// tbl_order_items.belongsTo(tbl_items, {
//   as: "item",
//   foreignKey: "item_id",
// })

module.exports = {
  sequelize,
  tbl_users,
  tbl_items,
  tbl_orders,
  tbl_order_items,
}
