const Users = require("./users.model")
const Items = require("./items.model")
const Orders = require("./order.model")
const OrderItems = require("./orderItems.model")

const sequelize = require("./sequelize")
const orderItemsModel = require("./orderItems.model")

Users.hasMany(Orders, {
  as: "orders",
  foreignKey: "user_id",
})

Orders.belongsTo(Users, {
  as: "user",
  foreignKey: "user_id",
})

Orders.belongsToMany(Items, {
  through: "tbl_order_items",
  as: "items",
  foreignKey: "order_id",
  // otherKey: "item_id",
})

Items.belongsToMany(Orders, {
  through: "tbl_order_items",
  as: "orders",
  foreignKey: "item_id",
  // otherKey: "order_id",
})

Orders.hasMany(OrderItems, {
  as: "orders",
  foreignKey: "order_id",
})

OrderItems.belongsTo(Orders, {
  as: "order",
  foreignKey: "order_id",
})

Items.hasMany(OrderItems, {
  as: "items",
  foreignKey: "item_id",
})

OrderItems.belongsTo(Items, {
  as: "item",
  foreignKey: "item_id",
})

module.exports = {
  sequelize,
  Users,
  Items,
  Orders,
  OrderItems,
}
