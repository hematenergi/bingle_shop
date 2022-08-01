const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelizeConfig")

class orderItemsModel extends Sequelize.Model {}

orderItemsModel.init(
  {
    order_items_id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    order_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "tbl_orders",
        key: "order_id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    },
    item_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "tbl_items",
        key: "item_id",
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
