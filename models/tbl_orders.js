"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class tbl_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tbl_orders.belongsTo(models.tbl_users, {
        foreignKey: "user_id",
        as: "user",
      })
    }
  }
  tbl_orders.init(
    {
      order_date: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tbl_orders",
    }
  )
  return tbl_orders
}
