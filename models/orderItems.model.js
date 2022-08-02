const Sequelize = require("sequelize")
const itemModel = require("./items.model")
const orderModel = require("./orders.model")
const sequelizeConfig = require("./sequelizeConfig")

class orderItemsModel extends Sequelize.Model {}

orderItemsModel.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    order_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: orderModel,
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    item_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: itemModel,
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    quantity: {
      type: Sequelize.DataTypes.INTEGER,
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
    },
    total_price: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelizeConfig,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "tbl_order_items",
  }
)

module.exports = orderItemsModel
